// import { Avatar, Box, Typography } from '@mui/material';
// import Footer from '../component/Footer';
// import Navbar from '../component/Navbar';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { userSignUpAction } from '../redux/actions/userAction';

// const validationSchema = yup.object({
//     firstName: yup
//         .string('Enter your First Name')
//         .min(3, 'First Name should be of minimum 3 characters length')
//         .required('First Name is required'),
//     lastName: yup
//         .string('Enter your Last Name')
//         .min(3, 'Last Name should be of minimum 3 characters length')
//         .required('Last Name is required'),
//     email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
//     confirmPassword: yup
//         .string('Confirm your password')
//         .oneOf([yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     mobileNo: yup
//         .string('Enter your mobile number')
//         .matches(/^[0-9]{10}$/, 'Mobile number should be 10 digits')
//         .required('Mobile number is required'),
//     address: yup
//         .string('Enter your address')
//         .required('Address is required'),
//     college: yup
//         .string('Enter your college details')
//         .required('College details are required'),
//     graduationYear: yup
//         .number('Enter your year of graduation')
//         .required('Year of graduation is required'),
//     resume: yup
//         .mixed()
//         .required('Resume is required'),
// });

// const Register = () => {
//     const dispatch = useDispatch();

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             mobileNo: '',
//             address: '',
//             college: '',
//             graduationYear: '',
//             resume: null
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values, actions) => {
//             const formData = new FormData();
//             for (const key in values) {
//                 formData.append(key, values[key]);
//             }
//             dispatch(userSignUpAction(formData));
//             actions.resetForm();
//         }
//     });

//     const handleFileChange = (event) => {
//         formik.setFieldValue('resume', event.currentTarget.files[0]);
//     };

//     return (
//         <>
//             <Navbar />
//             <Box sx={{ minHeight: 'calc(100vh - 140px)', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
//                 <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
//                     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
//                         <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
//                             <LockOpenIcon />
//                         </Avatar>
//                         <Typography variant="h5" mb={2}>Register</Typography>
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="firstName"
//                             label="First Name"
//                             name='firstName'
//                             placeholder="First Name"
//                             value={formik.values.firstName}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                             helperText={formik.touched.firstName && formik.errors.firstName}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="lastName"
//                             label="Last Name"
//                             name='lastName'
//                             placeholder="Last Name"
//                             value={formik.values.lastName}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                             helperText={formik.touched.lastName && formik.errors.lastName}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="email"
//                             label="E-mail"
//                             name='email'
//                             placeholder="E-mail"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.email && Boolean(formik.errors.email)}
//                             helperText={formik.touched.email && formik.errors.email}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="password"
//                             name="password"
//                             label="Password"
//                             type="password"
//                             placeholder="Password"
//                             value={formik.values.password}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.password && Boolean(formik.errors.password)}
//                             helperText={formik.touched.password && formik.errors.password}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             label="Confirm Password"
//                             type="password"
//                             placeholder="Confirm Password"
//                             value={formik.values.confirmPassword}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//                             helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="mobileNo"
//                             name="mobileNo"
//                             label="Mobile No"
//                             placeholder="Mobile No"
//                             value={formik.values.mobileNo}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
//                             helperText={formik.touched.mobileNo && formik.errors.mobileNo}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="address"
//                             name="address"
//                             label="Address"
//                             placeholder="Address"
//                             value={formik.values.address}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.address && Boolean(formik.errors.address)}
//                             helperText={formik.touched.address && formik.errors.address}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="college"
//                             name="college"
//                             label="College"
//                             placeholder="College"
//                             value={formik.values.college}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.college && Boolean(formik.errors.college)}
//                             helperText={formik.touched.college && formik.errors.college}
//                         />
//                         <TextField
//                             sx={{ mb: 2 }}
//                             fullWidth
//                             id="graduationYear"
//                             name="graduationYear"
//                             label="Year of Graduation"
//                             placeholder="Year of Graduation"
//                             type="number"
//                             value={formik.values.graduationYear}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             error={formik.touched.graduationYear && Boolean(formik.errors.graduationYear)}
//                             helperText={formik.touched.graduationYear && formik.errors.graduationYear}
//                         />
//                         <Button
//                             variant="contained"
//                             component="label"
//                             sx={{ mb: 2 }}
//                         >
//                             Upload Resume
//                             <input
//                                 type="file"
//                                 hidden
//                                 onChange={handleFileChange}
//                             />
//                         </Button>
//                         {formik.touched.resume && formik.errors.resume && (
//                             <Typography color="error" variant="body2">{formik.errors.resume}</Typography>
//                         )}
//                         <Button fullWidth variant="contained" type='submit'>Register</Button>
//                     </Box>
//                 </Box>
//             </Box>
//             <Footer />
//         </>
//     );
// }

// export default Register;

import { Avatar, Box, Typography } from '@mui/material';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userSignUpAction } from '../redux/actions/userAction';

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your First Name')
        .min(3, 'First Name should be of minimum 3 characters length')
        .required('First Name is required'),
    lastName: yup
        .string('Enter your Last Name')
        .min(3, 'Last Name should be of minimum 3 characters length')
        .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup
        .string('Confirm your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    mobileNo: yup
        .string('Enter your mobile number')
        .matches(/^[0-9]{10}$/, 'Mobile number should be 10 digits')
        .required('Mobile number is required'),
    address: yup
        .string('Enter your address')
        .required('Address is required'),
    college: yup
        .string('Enter your college details')
        .required('College details are required'),
    graduationYear: yup
        .number('Enter your year of graduation')
        .required('Year of graduation is required'),
    resume: yup
        .mixed()
        .required('Resume is required'),
});

const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobileNo: '',
            address: '',
            college: '',
            graduationYear: '',
            resume: null
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            const formData = new FormData();
            for (const key in values) {
                formData.append(key, values[key]);
            }
            dispatch(userSignUpAction(formData));
            actions.resetForm();
        }
    });

    const handleFileChange = (event) => {
        formik.setFieldValue('resume', event.currentTarget.files[0]);
    };

    return (
        <>
            
            <Box sx={{ minHeight: 'calc(100vh - 140px)', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#3FA2F6" }}>
                <Box  sx={{bgcolor: "#FCF8F3"}} onSubmit={formik.handleSubmit} component="form" className='form_style border-style'  >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography variant="h5" mb={2}>Register</Typography>
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="mobileNo"
                            name="mobileNo"
                            label="Mobile No"
                            placeholder="Mobile No"
                            value={formik.values.mobileNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
                            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="address"
                            name="address"
                            label="Address"
                            placeholder="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="college"
                            name="college"
                            label="College"
                            placeholder="College"
                            value={formik.values.college}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.college && Boolean(formik.errors.college)}
                            helperText={formik.touched.college && formik.errors.college}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            fullWidth
                            id="graduationYear"
                            name="graduationYear"
                            label="Year of Graduation"
                            placeholder="Year of Graduation"
                            type="number"
                            value={formik.values.graduationYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.graduationYear && Boolean(formik.errors.graduationYear)}
                            helperText={formik.touched.graduationYear && formik.errors.graduationYear}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ mb: 2 , bgcolor: "#4535C1"}}
                        >
                            Upload Resume
                            <input
                                type="file"
                                hidden
                                onChange={handleFileChange}
                            />
                        </Button>
                        {formik.touched.resume && formik.errors.resume && (
                            <Typography color="error" variant="body2">{formik.errors.resume}</Typography>
                        )}
                        <Button fullWidth variant="contained" type='submit'>Register</Button>
                    </Box>
                </Box>
            </Box>
            
        </>
    );
}

export default Register;

