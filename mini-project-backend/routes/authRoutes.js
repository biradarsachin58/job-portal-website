const express = require('express');
const multer = require('multer');
const path = require('path');
const { signup, signin, logout, userProfile } = require('../controllers/authControllers');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save the uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending timestamp to file name
    }
});

const upload = multer({ storage: storage });


//auth routes
router.post('/signin', signin);
router.get('/logout', logout);
router.get('/me',isAuthenticated, userProfile);
router.post('/signup', upload.single('resume'), signup);

module.exports = router;