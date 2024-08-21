const User = require("../models/userModels");
const ErrorResponse = require("../utils/errorResponse");

//load all users
async function allUsers(req, res, next){
    //enable pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();
    try {
        const users = await User.find().sort({createdAt: -1}).select('-password')
        .skip(pageSize * (page-1))
        .limit(pageSize)
        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil(count/pageSize),
            count,   
        });
    } catch (error) {
        return next(error);
    }
}

//single user
async function singleUser(req, res, next){
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
           
            success: true,
            user,
        });
        next();
    } catch (error) {
        next(error);
    }
}

//edit user
async function editUser(req, res, next){
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            success: true,
            user,
        });
        next();
    } catch (error) {
        next(error);
    }
}

//edit user
async function deleteUser(req, res, next){
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: "user deleted",
        });
        next();
    } catch (error) {
        next(error);
    }
}

async function createUserJobsHistory(req, res, next){
    const { title, description, salary, location, } = req.body;

    try {
        const currentUser = await User.findOne({ _id: req.user._id });
        if (!currentUser) {
            return next(new ErrorResponse("You must log In", 401));
        } else {
            const addJobHistory = {
                title,
                description,
                salary,
                location,
                user: req.user._id,
            }
            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();
        }

        res.status(200).json({
            success: true,
            currentUser
        })
        next();

    } catch (error) {
        return next(error);
    }
}

module.exports = {
    allUsers,
    singleUser,
    editUser,
    deleteUser,
    createUserJobsHistory,
}