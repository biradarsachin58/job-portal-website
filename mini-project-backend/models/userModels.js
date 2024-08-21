const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jobsHistorySchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    interviewDate: {
        type: Date,
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },



}, { timestamps: true })

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 31,
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 31,
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must lave atleast 6 characters']
    },
    mobileNo: {
        type: String,
        required: [true, 'Mobile number is required'],
        match: [/^[0-9]{10}$/, 'Mobile number should be 10 digits']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    college: {
        type: String,
        required: [true, 'College details are required']
    },
    graduationYear: {
        type: Number,
        required: [true, 'Year of graduation is required']
    },
    resume: {
        type: String, // Assume we store the resume file path as a string
        required: [true, 'Resume is required']
    },

    jobsHistory: [jobsHistorySchema],
    
    
}, {timestamps: true}
);

//encrypting password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//compare password
userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//return a jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

const User = mongoose.model('user', userSchema);

module.exports = User;
