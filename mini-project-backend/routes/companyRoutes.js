const express = require('express');
const { registerCompany, signin, logout, getCompanyDetails } = require('../controllers/companyController');
const { isCompanyAuthenticated } = require('../middlewares/companyauth');

const router = express.Router();

// Route to register a new company
router.post('/companies', registerCompany);
router.post('/company/signin', signin);
router.get('/company/logout', logout);
router.get('/company/details',isCompanyAuthenticated, getCompanyDetails);

module.exports = router;
