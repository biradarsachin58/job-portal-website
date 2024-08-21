import axios from 'axios';
import { toast } from 'react-toastify'
import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    EDIT_JOB_FAIL,
    EDIT_JOB_REQUEST,
    EDIT_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    FETCH_JOB_APPLICATIONS_REQUEST,
    FETCH_JOB_APPLICATIONS_SUCCESS,
    FETCH_JOB_APPLICATIONS_FAIL
} from "../constants/jobconstant"


export const jobLoadAction = (pageNumber,keyword = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/?pageNumber=${pageNumber}&keyword=${keyword}&location=${location}`)
        //const { data } = await axios.get(`/api/jobs/?keyword=${keyword}&location=${location}`)
        //console.log('Fetched applications data:', data);
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        console.log('Fetched single job data:', data);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}


//delete single job action
export const deleteSingleJobAction = (job_id) => async (dispatch) => {
    dispatch({ type: DELETE_JOB_REQUEST });
    try {
        const token = localStorage.getItem('companyToken');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const { data } = await axios.delete(`/api/job/delete/${job_id}`, config);
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//edit single job action
export const editSingleJobAction = (jobId) => async (dispatch) => {
    dispatch({ type: EDIT_JOB_REQUEST });
    try {
        const token = localStorage.getItem('companyToken');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const { data } = await axios.put(`/api/job/update/${jobId}`, config);
        dispatch({
            type: EDIT_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job updated successfully");
    } catch (error) {
        dispatch({
            type: EDIT_JOB_FAIL,
            payload: error.response?.data?.error || error.message
            
        });
        toast.error(error.response?.data?.error || error.message);
    }
}

// register job action
// export const registerAjobAction = (job) => async (dispatch) => {
//     dispatch({ type: REGISTER_JOB_REQUEST })

//     try {
//         //const { data } = await axios.post("/api/job/create", job)
//         const { data } = await axios.post("/api/job/create", job)
//         dispatch({
//             type: REGISTER_JOB_SUCCESS,
//             payload: data
//         })
//         toast.success("Job created successfully");

//     } catch (error) {
//         dispatch({
//             type: REGISTER_JOB_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error);
//     }
// }



export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST });

    try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('companyToken');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        const { data } = await axios.post("/api/job/create", job, config);
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job created successfully");

    } catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.response?.data?.error || error.message
        });
        toast.error(error.response?.data?.error || error.message);
    }
}


export const fetchCompanyJobs = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'COMPANY_JOBS_REQUEST' });

        const { companySignIn: { companyInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${companyInfo.token}`,
            },
        };

        const { data } = await axios.get('/api/company/jobs', config);

        dispatch({
            type: 'COMPANY_JOBS_SUCCESS',
            payload: data.jobs,
        });
    } catch (error) {
        dispatch({
            type: 'COMPANY_JOBS_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
        toast.error(error.response.data.message || error.message);
    }
};



// export const fetchJobApplicationsAction = (jobId) => async (dispatch) => {
//     dispatch({ type: FETCH_JOB_APPLICATIONS_REQUEST });

//     try {
//         const token = localStorage.getItem('companyToken');
//         if (!token) {
//             throw new Error("Company not authenticated");
//         }

//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         };

//         const { data } = await axios.get(`/api/${jobId}/applications`, config);

//         dispatch({
//             type: FETCH_JOB_APPLICATIONS_SUCCESS,
//             payload: data.applications,
//         });
//     } catch (error) {
//         dispatch({
//             type: FETCH_JOB_APPLICATIONS_FAIL,
//             payload: error.response?.data?.error || error.message,
//         });
//     }
// };

export const fetchJobApplicationsAction = (jobId) => async (dispatch) => {
    dispatch({ type: FETCH_JOB_APPLICATIONS_REQUEST });

    try {
        const token = localStorage.getItem('companyToken');
        if (!token) {
            throw new Error("Company not authenticated");
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };

        const { data } = await axios.get(`/api/${jobId}/applications`, config);
        //console.log('Fetched applications data:', data);

        dispatch({
            type: FETCH_JOB_APPLICATIONS_SUCCESS,
            payload: data, // Assuming data is an array of applications
        });
    } catch (error) {
        console.error('Error fetching applications:', error);
        dispatch({
            type: FETCH_JOB_APPLICATIONS_FAIL,
            payload: error.response?.data?.error || error.message,
        });
    }
};
