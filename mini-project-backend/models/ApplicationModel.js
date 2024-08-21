// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema.Types;

// const applicationSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     job: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Job',
//         required: true
//     },
    
//     status: {
//         type: String,
//         enum: ["Pending", "Accepted", "Rejected"],
//         default: "Pending"
//     },
    
//     userDetails: { // Additional field to store user details
//         firstName: String,
//         lastName: String,
//         email: String,
//         mobileNo: String,
//         address: String,
//         college: String,
//         graduationYear: String,
//         resume: String

//         // Add other fields from User model as needed
//     },
//     // Add other fields as needed
// }, { timestamps: true });

// module.exports = mongoose.model('Application', applicationSchema);


const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const applicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending"
    },
    userDetails: { // Additional field to store user details
        firstName: String,
        lastName: String,
        email: String,
        mobileNo: String,
        address: String,
        college: String,
        graduationYear: String,
        resume: String

        // Add other fields from User model as needed
    },
    jobDetails: {
        companyName: String,
        title: String,
        description: String,
        salary: String
    }
    // Add other fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);