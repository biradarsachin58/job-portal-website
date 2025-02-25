const JobType = require('../models/jobTypeModels');
const ErrorResponse = require('../utils/errorResponse');

exports.createJobType = async(req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}

exports.allJobTypes = async(req, res, next) => {
    try {
        const jobT = await JobType.find();
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}

exports.updateJobType = async(req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndUpdate(req.params.type_id, req.body, {new: true});
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteJobType = async(req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "job type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
}