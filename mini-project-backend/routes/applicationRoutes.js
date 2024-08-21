const express = require('express');
const router = express.Router();
const { acceptApplication, rejectApplication } = require('../controllers/ApplicationController');

// POST /api/applications/:id/accept
//router.put('/:id/accept', acceptApplication);

// POST /api/applications/:id/reject
//router.put('/:id/reject', rejectApplication);

module.exports = router;
