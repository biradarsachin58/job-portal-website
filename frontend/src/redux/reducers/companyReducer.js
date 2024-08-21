import {
    COMPANY_REGISTER_REQUEST,
    COMPANY_REGISTER_SUCCESS,
    COMPANY_REGISTER_FAIL,
    COMPANY_SIGNIN_REQUEST,
    COMPANY_SIGNIN_SUCCESS,
    COMPANY_SIGNIN_FAILURE,
    COMPANY_SIGNIN_RESET,
    COMPANY_LOGOUT_REQUEST,
    COMPANY_LOGOUT_FAIL,
    COMPANY_LOGOUT_RESET,
    COMPANY_LOGOUT_SUCCESS,
    COMPANY_JOBS_REQUEST,
    COMPANY_JOBS_SUCCESS,
    COMPANY_JOBS_FAIL,
    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_FAIL,
    COMPANY_DETAILS_RESET,
  } from '../constants/companyConstant';
  
  export const companyRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case COMPANY_REGISTER_REQUEST:
        return { loading: true };
      case COMPANY_REGISTER_SUCCESS:
        return { loading: false, success: true, companyInfo: action.payload };
      case COMPANY_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  // sign In reducer
export const companyReducerSignIn = (state = {}, action) => {
  switch (action.type) {
      case COMPANY_SIGNIN_REQUEST:
          return { loading: true, companyInfo: null, isAuthenticated: false }
      case COMPANY_SIGNIN_SUCCESS:
          return {
              loading: false,
              companyInfo: action.payload,
              isAuthenticated: true
          }
      case COMPANY_SIGNIN_FAILURE:
          return { loading: false, companyInfo: null, isAuthenticated: false, error: action.payload }
      case COMPANY_SIGNIN_RESET:
          return {}
      default:
          return state;
  }
}

export const companyReducerLogout = (state = {}, action) => {
  switch (action.type) {
      case COMPANY_DETAILS_REQUEST:
          return { loading: true };
      case COMPANY_DETAILS_SUCCESS:
          return {
              loading: false,
              company: action.payload,
          };
      case COMPANY_DETAILS_FAIL:
          return {
              loading: false,
              error: action.payload
          };
      case COMPANY_LOGOUT_RESET:
          return {};
      default:
          return state;
  }
};

export const companyJobsReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
      case COMPANY_JOBS_REQUEST:
          return { loading: true };
      case COMPANY_JOBS_SUCCESS:
          return { loading: false, jobs: action.payload };
      case COMPANY_JOBS_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
};

// export const companyJobsReducer = (state = { jobs: [] }, action) => {
//     switch (action.type) {
//         case COMPANY_JOBS_REQUEST:
//             return { loading: true , count: null };
//         case COMPANY_JOBS_SUCCESS:
//             return { loading: false, jobs: action.payload, count: action.payload.count };
//         case COMPANY_JOBS_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
//   };

export const companyReducerDetails = (state = {}, action) => {
  switch (action.type) {
      case COMPANY_DETAILS_REQUEST:
          return { loading: true ,
            company: null
          };
      case COMPANY_DETAILS_SUCCESS:
          return {
              loading: false,
              company: action.payload.company,
          };
      case COMPANY_DETAILS_FAIL:
          return {
              loading: false,
              company: null,
              error: action.payload
          };
      case COMPANY_DETAILS_RESET:
          return {};
      default:
          return state;
  }
};
  