const Application = require('../models/ApplicationModel');
const Job = require('../models/jobModels');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/userModels');





// exports.getJobApplications = async (req, res, next) => {
//     try {
//         const jobId = req.params.jobId;
//         console.log('Fetching job applications for job ID:', jobId);
        
//         const job = await Job.findById(jobId);
//         if (!job) {
//             console.log('Job not found for ID:', jobId);
//             return res.status(404).json({ message: 'Job not found' });
//         }
//         console.log('Job found:', job);

//         const applications = await Application.find({ job: jobId }).populate('User', 'firstName email');
//         console.log('Applications found:', applications);
        
//         res.status(200).json(applications);
//         next();
//     } catch (error) {
//         console.error('Error fetching job applications:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

exports.getJobApplications = async (req, res, next) => {
    try {
        const jobId = req.params.jobId;
        console.log('Fetching job applications for job ID:', jobId);
        
        const job = await Job.findById(jobId);
        if (!job) {
            console.log('Job not found for ID:', jobId);
            return res.status(404).json({ message: 'Job not found' });
        }
        console.log('Job found:', job);

        const applications = await Application.find({ job: jobId }).populate('User', 'firstName email');
        console.log('Applications found:', applications);
        
        return res.status(200).json(applications);
        next();
    } catch (error) {
        console.error('Error fetching job applications:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// exports.getUserApplications = async (req, res, next) => {
//     try {
//         const userId = req.user._id;
//         console.log('Fetching job applications for job ID:', userId);
        
//         const user = await User.findById(userId);
//         if (!user) {
//             console.log('User not found for ID:', userId);
//             return res.status(404).json({ message: 'User not found' });
//         }
//        // console.log('User found:', user);

//         const applications = await Application.find({ user: userId }).populate('Job', 'title');
//         console.log('Applications found:', applications);
        
//         res.status(200).json(applications);
//     } catch (error) {
//         console.error('Error fetching user applications:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

exports.getUserApplications = async (req, res, next) => {
    try {
        const userId = req.user._id;
        console.log('Fetching job applications for job ID:', userId);
        
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found for ID:', userId);
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            const applications = await Application.find({ user: userId }).populate('Job', 'title');
            console.log('Applications found:', applications);
            
            return res.status(200).json({
                message : "application found",
                applications
            });
        }
        //next();
    } catch (error) {
        //console.error('Error fetching user applications:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};




// exports.acceptApplication = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const application = await Application.findByIdAndUpdate(
//             id,
//             { $set: { status: 'Accepted' } },
//             { new: true }
//         );

//         if (!application) {
//             return res.status(404).json({ message: 'Application not found' });
//         }

//         res.json(application);
//     } catch (error) {
//         console.error('Error accepting application:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// Reject an application
// exports.rejectApplication = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const application = await Application.findByIdAndUpdate(
//             id,
//             { $set: { status: 'Rejected' } },
//             { new: true }
//         );

//         if (!application) {
//             return res.status(404).json({ message: 'Application not found' });
//         }

//         res.json(application);
//     } catch (error) {
//         console.error('Error rejecting application:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };



