// import { Avatar, Box, Typography } from '@mui/material';
// import React, { useEffect } from 'react';

// import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { companySignInAction } from '../redux/actions/companyAction'; // Adjust import as needed
// import { useNavigate } from 'react-router-dom';

// const validationSchema = yup.object({
//     email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
// });

// const CompanyLogin = () => {
//     const dispatch = useDispatch();  
//     const navigate = useNavigate();
//     const { isAuthenticated, companyInfo } = useSelector(state => state.companySignIn); // Adjust state variable as per your Redux setup

//     useEffect(() => {
//         if (isAuthenticated) {
//             // Redirect based on company role or other criteria if needed
//             navigate('/company/dashboard'); // Example redirection
//         }
//     }, [navigate, isAuthenticated]);

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values, actions) => {
//             dispatch(companySignInAction(values)); // Dispatch company sign-in action
//             actions.resetForm();
//         }
//     });  

//     return (
//         <>
            
//             <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: '#3FA2F6' }}>
//                 <Box component="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 400, width: '100%', p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 8 }}>
//                     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                         <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
//                             <LockClockOutlined />
//                         </Avatar>
//                         <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
//                             Company Log In
//                         </Typography>
//                         <TextField
//                             fullWidth
//                             id="email"
//                             name='email'
//                             label="E-mail"
//                             placeholder="Enter your email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.email && Boolean(formik.errors.email)}
//                             helperText={formik.touched.email && formik.errors.email}
//                             sx={{ mb: 3 }}
//                             variant="outlined"
//                             color="primary"
//                         />
//                         <TextField
//                             fullWidth
//                             id="password"
//                             name="password"
//                             label="Password"
//                             type="password"
//                             placeholder="Enter your password"
//                             value={formik.values.password}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.password && Boolean(formik.errors.password)}
//                             helperText={formik.touched.password && formik.errors.password}
//                             sx={{ mb: 3 }}
//                             variant="outlined"
//                             color="primary"
//                         />
//                         <Button fullWidth variant="contained" type='submit' sx={{ bgcolor: 'primary.main', color: 'white' }}>
//                             Log In
//                         </Button>
//                     </Box>
//                 </Box>
//             </Box>
            
//         </>
//     );
// };

// export default CompanyLogin;

import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { companySignInAction } from '../redux/actions/companyAction'; // Adjust import as needed
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const CompanyLogin = () => {
    const dispatch = useDispatch();  
    const navigate = useNavigate();
    const { isAuthenticated, companyInfo } = useSelector(state => state.companySignIn); // Adjust state variable as per your Redux setup

    useEffect(() => {
        if (isAuthenticated) {
            // Redirect based on company role or other criteria if needed
            navigate('/company/dashboard'); // Example redirection
        }
    }, [navigate, isAuthenticated]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(companySignInAction(values)); // Dispatch company sign-in action
            actions.resetForm();
        }
    });  

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                
                <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: '#3FA2F6' }}>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 400, width: '100%', p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 8 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                                <LockClockOutlined />
                            </Avatar>
                            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                Company Log In
                            </Typography>
                            <TextField
                                fullWidth
                                id="email"
                                name='email'
                                label="E-mail"
                                placeholder="Enter your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                sx={{ mb: 3 }}
                                variant="outlined"
                                color="primary"
                            />
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                sx={{ mb: 3 }}
                                variant="outlined"
                                color="primary"
                            />
                            <Button fullWidth variant="contained" type='submit' sx={{ bgcolor: 'primary.main', color: 'white' }}>
                                Log In
                            </Button>
                        </Box>
                    </Box>
                </Box>
               
            </Box>
        </>
    );
};

export default CompanyLogin;

