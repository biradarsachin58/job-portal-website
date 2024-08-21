import axios from 'axios';
import { toast } from "react-toastify";
import {
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_FAIL,
  COMPANY_SIGNIN_REQUEST,
  COMPANY_SIGNIN_SUCCESS,
  COMPANY_SIGNIN_FAILURE,
  COMPANY_LOGOUT_REQUEST,
  COMPANY_LOGOUT_SUCCESS,
  COMPANY_LOGOUT_FAIL,
  COMPANY_JOBS_REQUEST,
  COMPANY_JOBS_SUCCESS,
  COMPANY_JOBS_FAIL,
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
} from '../constants/companyConstant';

export const registerCompany = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/companies', companyData, config);

    dispatch({
      type: COMPANY_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// export const companySignInAction = (company) => async (dispatch) => {
//   dispatch({ type: COMPANY_SIGNIN_REQUEST });
//   try {
//       const { data } = await axios.post("/api/company/signin", company);
//       localStorage.setItem('companyInfo', JSON.stringify(data));
      
//       dispatch({
//           type: COMPANY_SIGNIN_SUCCESS,
//           payload: data
//       });
//       toast.success("Login Successfully!");
//   } catch (error) {
//       dispatch({
//           type: COMPANY_SIGNIN_FAILURE,
//           payload: error.response?.data?.error
//       });
//       toast.error(error.response.data.error);
//   }
// }



export const companySignInAction = (company) => async (dispatch) => {
  dispatch({ type: COMPANY_SIGNIN_REQUEST });
  try {
      const { data } = await axios.post("/api/company/signin", company);
      
      // Store token separately in local storage
      localStorage.setItem('companyToken', data.token);
      
      // Store the entire response data in companyInfo
      localStorage.setItem('companyInfo', JSON.stringify(data));
      
      dispatch({
          type: COMPANY_SIGNIN_SUCCESS,
          payload: data
      });
      toast.success("Login Successfully!");
  } catch (error) {
      dispatch({
          type: COMPANY_SIGNIN_FAILURE,
          payload: error.response?.data?.error
      });
      toast.error(error.response.data.error);
  }
}




export const companyLogoutAction = () => async (dispatch) => {
    dispatch({ type: COMPANY_LOGOUT_REQUEST });

    try {
        localStorage.removeItem('companyInfo'); // Remove companyInfo from localStorage
        localStorage.removeItem('companyToken')
        const { data } = await axios.get("/api/company/logout"); // Adjust the endpoint as per your backend API
        dispatch({
            type: COMPANY_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Logged out successfully!");
    } catch (error) {
        dispatch({
            type: COMPANY_LOGOUT_FAIL,
            payload: error.response?.data?.error || 'Logout Failed'
        });
        toast.error(error.response?.data?.error || 'Logout Failed');
    }
};


export const fetchCompanyJobs = () => async (dispatch, getState) => {
  try {
      dispatch({ type: COMPANY_JOBS_REQUEST });

      const { companySignIn: { companyInfo } } = getState();

      const config = {
          headers: {
              Authorization: `Bearer ${companyInfo.token}`,
          },
      };

      const { data } = await axios.get('/api/company/jobs', config);
      //console.log(`company job details: ${data}`);

      dispatch({
          type: COMPANY_JOBS_SUCCESS,
          payload: data.jobs,
      });
  } catch (error) {
      dispatch({
          type: COMPANY_JOBS_FAIL,
          payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
      });
      toast.error(error.response.data.message || error.message);
  }
};

export const fetchCompanyDetails = () => async (dispatch) => {
  dispatch({ type: COMPANY_DETAILS_REQUEST });
  try {
      const token = localStorage.getItem('companyToken');

      const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
      };

      const { data } = await axios.get('/api/company/details', config);
      console.log(`company details ${data}`);  

      dispatch({
          type: COMPANY_DETAILS_SUCCESS,
          payload: data
      });
  } catch (error) {
      dispatch({
          type: COMPANY_DETAILS_FAIL,
          payload: error.response.data.error
      });
  }
};
