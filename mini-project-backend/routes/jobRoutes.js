const express = require('express');
require('../models/userModels');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, getCompanyJobs, getAllJobs, applyForJob, deleteJob } = require('../controllers/jobControllers');
const { isCompanyAuthenticated } = require('../middlewares/companyauth');

const { isAuthenticated} = require("../middlewares/auth");
const { getJobApplications } = require('../controllers/ApplicationController');

const upload = require('../controllers/multerCongig'); // Import Multer configuration


router.post('/job/create',  isCompanyAuthenticated, createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id', isCompanyAuthenticated, updateJob);
//router.get('/job/show', showJobs);
router.get('/company/jobs', isCompanyAuthenticated, getCompanyJobs);
//router.get('/jobs/:jobId/applications', isCompanyAuthenticated, getApplicationsForJob);
router.get('/jobs', getAllJobs);
router.post('/apply/:jobId', isAuthenticated, applyForJob);
router.get('/:jobId/applications', isCompanyAuthenticated, getJobApplications);
//router.get('/job/:id/applications', isCompanyAuthenticated, getJobApplications);
router.delete('/job/delete/:job_id', isCompanyAuthenticated, deleteJob);


// Example route for file upload
router.post('/upload', upload.single('resume'), (req, res) => {
    // File upload logic here
    res.send({ message: 'File uploaded successfully' });
});

module.exports = router;