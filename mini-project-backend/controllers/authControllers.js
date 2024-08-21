const User = require("../models/userModels");
const ErrorResponse = require("../utils/errorResponse");
const path = require('path');

async function signup(req, res, next) {
    const { email } = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
        return next(new ErrorResponse("E-mail already registered", 400));
    }
    try {
        const { firstName, lastName, email, password, mobileNo, address, college, graduationYear } = req.body;
        const resume = req.file.filename; // Store only the filename

        const user = new User({
            firstName,
            lastName,
            email,
            password,
            mobileNo,
            address,
            college,
            graduationYear,
            resume
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function serveResume(req, res) {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename); // Adjust the path to the 'uploads' directory
    res.sendFile(filePath);
};


async function signin(req, res, next) {
    
    try {
        const { email, password } = req.body;
        //validation
        if(!email){
            return next(new ErrorResponse("please add an email", 403));
        }
        if(!password){
            return next(new ErrorResponse("please add password", 403));
        }
        //check user email
        const user = await User.findOne({email});
        if(!user){
            return next(new ErrorResponse("invalid credentials, 400"));
        }
        //check user password
        const isMatched = await user.comparePassword(password);
        if(!isMatched){
            return next(new ErrorResponse("invalid credentials, 400"));
        }

        sendTokenResponse(user, 200, res);
    } catch (error) {
        next(error);
    }
} 

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
    .status(codeStatus)
    .cookie('token', token, {maxAge: 60*60*1000, httpOnly: true})
    .json({ 
        success: true,
         role: user.role 
        })
}

//logout
function logout(req, res, next) {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    });
}

//user profile
async function userProfile(req, res, next) {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    });
}

module.exports = {
    signup,
    signin,
    logout,
    userProfile,
    serveResume,
}