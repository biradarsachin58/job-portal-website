import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
    deleteJobReducer,
    jobApplicationsReducer,
    loadJobReducer,
    loadJobSingleReducer,
    registerAjobReducer,
    updateJobReducer
} from './reducers/jobReducer';

import {
    createJobTypeReducer,
    loadJobTypeReducer
} from './reducers/jobTypeReducer';

import {
    allUserReducer,
    userApplicationsReducer,
    userApplyJobReducer,
    userHistoryJobReducer,
    userReducerLogout,
    userReducerProfile,
    userReducerSignIn,
    userReducerSignUp
} from './reducers/userReducer';
import { companyJobsReducer, companyReducerDetails, companyReducerLogout, companyReducerSignIn, companyRegisterReducer } from './reducers/companyReducer';



//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    signUp: userReducerSignUp,
    registerJob: registerAjobReducer,
    deleteJob: deleteJobReducer,
    createJob: registerAjobReducer,
    createJobType: createJobTypeReducer,
    updateJob: updateJobReducer,
    companyRegister: companyRegisterReducer,
    companySignIn: companyReducerSignIn,
    companyLogout: companyReducerLogout,
    loadCompanyJobs: companyJobsReducer,
    jobApplications: jobApplicationsReducer,
    jobHistory: userHistoryJobReducer,
    editJob: updateJobReducer,
    companyDetails: companyReducerDetails,
    userApplications: userApplicationsReducer

});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    mode: {
        mode: "light"
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;