const ErrorResponse = require('../utils/errorResponse');
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

//check whether user is authenticated
exports.isAuthenticated = async(req, res, next) => {
    const { token } = req.cookies;
    if(!token){
        return next(new ErrorResponse("Not Autherize to access this route", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return next(new ErrorResponse("User not found", 404));
        }
        next();
    } catch (error) {
        return next(new ErrorResponse("Not Autherize to access this route", 401));
    }
}

// const jwt = require('jsonwebtoken');
// const ErrorResponse = require('../utils/errorResponse');
// const User = require("../models/userModels");

// exports.isAuthenticated = async (req, res, next) => {
//     let token;

//     // Check if token is present in cookies or headers
//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith('Bearer')
//     ) {
//         // Extract token from Authorization header
//         token = req.headers.authorization.split(' ')[1];
//     }

//     // If token doesn't exist
//     if (!token) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//     }

//     try {
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // Fetch company details based on decoded ID
//         req.user = await Company.findById(decoded.id);

//         // If company not found
//         if (!req.user) {
//             return next(new ErrorResponse('user not found', 404));
//         }

//         // Proceed to the next middleware or route handler
//         next();
//     } catch (error) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//     }
// };

// //middleware for admin

exports.isAdmin = async(req, res, next) => {
    if(req.user.role === 0){
        return next(new ErrorResponse('Access Denied, you must be Admin', 401));
    }
    next();
}