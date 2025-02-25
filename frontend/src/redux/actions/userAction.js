
import axios from 'axios';
import { toast } from "react-toastify";
import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    FETCH_USER_APPLICATIONS_FAIL,
    FETCH_USER_APPLICATIONS_REQUEST,
    FETCH_USER_APPLICATIONS_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_SUCCESS,
    USER_HISTORY_JOB_FAIL,
    USER_HISTORY_JOB_REQUEST,
    USER_HISTORY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from '../constants/userConstant';



export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post("/api/signin", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");
    } catch (error) {
        dispatch({  
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// user sign up action
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("/api/signup", user);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userToken');
        const { data } = await axios.get("/api/logout");
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//user profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/me");
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


//all user action
export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/allusers");
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//user job history action
export const userHistoryJobAction = (job) => async (dispatch) => {
    dispatch({ type: USER_HISTORY_JOB_REQUEST });
    try {
        const { data } = await axios.post("/api/user/jobhistory", job);

        dispatch({
            type: USER_HISTORY_JOB_SUCCESS,
            payload: data
        });
        toast.success("hisory stored for this Job!");
    } catch (error) {
        dispatch({
            type: USER_HISTORY_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}



export const userApplyJobAction = (jobId) => async (dispatch, getState) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });

    try {
        // Retrieve the token from local storage
        // const token = localStorage.getItem('userToken');
        
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`,
        //     },
        // };

        const { data } = await axios.post(`/api/apply/${jobId}/`, {});

        dispatch({
            type: USER_APPLY_JOB_SUCCESS,
            payload: data,
        });

        toast.success("Applied successfully!");
    } catch (error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response?.data?.error || error.message,
        });

        toast.error(error.response?.data?.error || error.message);
    }
};


export const fetchUserApplicationsAction = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_APPLICATIONS_REQUEST });

    try {
        
        const { data } = await axios.get(`/api/applications/user`);
        console.log('Fetched applications data:', data);

        dispatch({
            type: FETCH_USER_APPLICATIONS_SUCCESS,
            payload: data, // Assuming data is an array of applications
        });
    } catch (error) {
        console.error('Error fetching applications:', error);
        dispatch({
            type: FETCH_USER_APPLICATIONS_FAIL,
            payload: error.response?.data?.error || error.message,
        });
    }
};

