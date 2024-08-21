const Job = require('../models/jobModels');
const JobType = require('../models/jobTypeModels');
const User = require('../models/userModels');
const ErrorResponse = require('../utils/errorResponse');
const Application = require('../models/ApplicationModel');

exports.createJob = async(req, res, next) => {
    try {
        const job = await Job.create({
            companyName: req.body.companyName,
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            skillsRequired: req.body.skillsRequired,
            location: req.body.location,
            createdBy: req.company._id 
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

exports.singleJob = async(req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true })
        //const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('User', 'firstName lastName');    
        
        if (!job) {
            return next(new ErrorResponse("Job not found", 404));
        }

        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        console.error(error); // Add this to see the full error in the console
        next(error);
    }
};

exports.showJobs = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter jobs by category ids
    let ids = [];
    const jobTypeCategory = await JobType.find({}, { _id: 1 });
    jobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = (cat && cat !== '') ? [cat] : ids;

    //jobs by location
    let locations = [];
    const jobByLocation = await Job.find({}, { location: 1 });
    jobByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    const locationFilter = (location !== undefined && location !== null && location !== '') ? location : { $in: setUniqueLocation };

    
        



    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, jobType: categ, location: locationFilter }).countDocuments();

    try {
        const jobs = await Job.find({ ...keyword, jobType: categ, location: locationFilter}).sort({ createdAt: -1 }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation
        })
    } catch (error) {
        next(error);
    }
}

//delete job by id.
exports.deleteJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.job_id);
        res.status(200).json({
            success: true,
            message: "job deleted."
        })
    } catch (error) {
        next(error);
    }
}

// exports.getCompanyJobs = async (req, res, next) => {
//     try {
//         // Fetch jobs where createdBy matches the authenticated company's ID
//         const jobs = await Job.find({ createdBy: req.params.company_id });

//         res.status(200).json({
//             success: true,
//             count: jobs.length,
//             jobs
//         });
//     } catch (error) {
//         next(error);  // Pass any errors to the error handling middleware
//     }
// };

exports.getCompanyJobs = async (req, res, next) => {
    try {
        // Fetch jobs where createdBy matches the authenticated company's ID
        const jobs = await Job.find({ createdBy: req.company._id });

        res.status(200).json({
            success: true,
            count: jobs.length,
            jobs
        });
    } catch (error) {
        next(error);
    }
};



// Controller function to get all jobs
exports.getAllJobs = async (req, res, next) => {

    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    let locations = [];
    const jobByLocation = await Job.find({}, { location: 1 });
    jobByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    const locationFilter = (location !== undefined && location !== null && location !== '') ? location : { $in: setUniqueLocation };

    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({...keyword, location: locationFilter}).estimatedDocumentCount();

    try {
        //
        const jobs = await Job.find({...keyword, location: locationFilter}).populate('Company', 'companyName').skip(pageSize * (page - 1)).limit(pageSize); // Assuming 'company' is the field referencing Company model

        res.status(200).json({  
            // success: true,
            // count: jobs.length,
            // jobs,
            // count,
            // setUniqueLocation
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation
        });
    } catch (error) {
        next(error);
    }
};

// exports.applyForJob = async (req, res, next) => {
//     try {
//         const { jobId } = req.params;
//         const userId = req.user._id;

//         // Create a new application
//         const application = await Application.create({
//             job: jobId,
//             user: userId
//         });

//         // Update the job document to include the user in the appliedUsers array
//         await Job.findByIdAndUpdate(jobId, { $addToSet: { appliedUsers: userId } });

//         res.status(201).json({
//             success: true,
//             application
//         });
//     } catch (error) {
//         next(error);
//     }
// };



// exports.applyForJob = async (req, res, next) => {
//     try {
//         const { jobId } = req.params;
//         const userId = req.user._id;
//         //const jobHistoryid = req.user.jobHistory._id
//         // Find the user details
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         // Create a new application
//         const application = await Application.create({
//             job: jobId,
//             user: userId,
//             //jobHistoryId: jobHistoryid,
//             userDetails: {
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 mobileNo: user.mobileNo,
//                 address: user.address,
//                 college: user.college,
//                 graduationYear: user.graduationYear,
//                 resume: user.resume

//                 // Add other user details as needed
//             },
//             status: 'Pending', // Set the initial status of the application
//         });

//         // Update the job document to include the user in the appliedUsers array
//         await Job.findByIdAndUpdate(jobId, { $addToSet: { appliedUsers: userId } });

//         res.status(201).json({
//             success: true,
//             application
//         });
//     } catch (error) {
//         console.error('Error applying for job:', error);
//         next(error);
//     }
// };

exports.applyForJob = async (req, res, next) => {
    try {
        const { jobId } = req.params;
        const userId = req.user._id;
        //const jobHistoryid = req.user.jobHistory._id
        // Find the user details
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, message: 'job not found' });
        }

        // Create a new application
        const application = await Application.create({
            job: jobId,
            user: userId,
            //jobHistoryId: jobHistoryid,
            userDetails: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                mobileNo: user.mobileNo,
                address: user.address,
                college: user.college,
                graduationYear: user.graduationYear,
                resume: user.resume

                // Add other user details as needed
            },
            status: 'Pending', // Set the initial status of the application
            jobDetails: {
                companyName: job.companyName,
                title: job.title,
                description: job.description,
                salary: job.salary
            }
        });

        // Update the job document to include the user in the appliedUsers array
        await Job.findByIdAndUpdate(jobId, { $addToSet: { appliedUsers: userId } });

        res.status(201).json({
            success: true,
            application
        });
    } catch (error) {
        console.error('Error applying for job:', error);
        next(error);
    }
};




