import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CompanyRoute = ({ children }) => {

    const { companyInfo } = useSelector((state) => state.companySignIn);
    return companyInfo ? children : <Navigate to="/" />;
}

export default CompanyRoute;