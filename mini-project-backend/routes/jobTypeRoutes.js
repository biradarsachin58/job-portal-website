const express = require('express');
const router = express.Router();
const { createJobType, allJobTypes, updateJobType, deleteJobType } = require('../controllers/jobTypeControllers');
const { isAuthenticated, isAdmin } =require('../middlewares/auth');

router.post('/type/create', isAuthenticated, isAdmin, createJobType);
router.get('/type/jobs', allJobTypes);
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType);
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType);

module.exports = router;