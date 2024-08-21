const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const User = require("../models/userModels");
const Company = require("../models/companyModel")
const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        trim: true,
        required:[true, 'Company name is required']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
    },
    skillsRequired: {
        type: String,
        required: [true, 'skill is required']
    },
    location: {
        type: String,
        trim: true,
        default: 'Not specified',
    },
    available: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: ObjectId,
        ref: "Company",  // Reference to the Company model
        required: true
     },
    appliedUsers: [{
        type: ObjectId,
        ref: "User"
    }]
}, { timestamps: true });
module.exports = mongoose.model("Job", jobSchema);