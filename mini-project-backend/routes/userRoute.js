const express = require('express');
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { getUserApplications } = require('../controllers/ApplicationController');
const router = express.Router();

router.get('/allusers', isAuthenticated, isAdmin, allUsers);
router.get('/user/:id', isAuthenticated, singleUser);
router.put('/user/edit/:id', isAuthenticated, editUser);
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);
//router.post('/user/jobhistory', createUserJobsHistory);
router.post('/user/jobhistory',isAuthenticated, createUserJobsHistory);
router.get('/applications/user', isAuthenticated, getUserApplications);

module.exports = router;