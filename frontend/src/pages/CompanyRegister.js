// import { Avatar, Box, Typography } from '@mui/material';
// import Footer from '../component/Footer';
// import Navbar from '../component/Navbar';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerCompany } from '../redux/actions/companyAction';

// const validationSchema = yup.object({
//   companyName: yup.string('Enter your Company Name').required('Company Name is required'),
//   location: yup.string('Enter your Location').required('Location is required'),
//   email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
//   password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
//   confirmPassword: yup.string('Confirm your password').oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
// });

// const RegisterCompany = () => {
//   const dispatch = useDispatch();

//   const { loading, error, success } = useSelector((state) => state.companyRegister);

//   const formik = useFormik({
//     initialValues: {
//       companyName: '',
//       location: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       dispatch(registerCompany(values));//minHeight: 'calc(100vh - 140px)'
//     },
//   });

//   return (
//     <>
      
//       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#3FA2F6" }}>
//         <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style'>
//           <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
//             <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
//               <LockOpenIcon />
//             </Avatar>
//             <Typography variant="h5" mb={2}>Register Company</Typography>
//             <TextField
//               sx={{ mb: 2 }}
//               fullWidth
//               id="companyName"
//               label="Company Name"
//               name='companyName'
//               placeholder="Company Name"
//               value={formik.values.companyName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.companyName && Boolean(formik.errors.companyName)}
//               helperText={formik.touched.companyName && formik.errors.companyName}
//             />
//             <TextField
//               sx={{ mb: 2 }}
//               fullWidth
//               id="location"
//               label="Location"
//               name='location'
//               placeholder="Location"
//               value={formik.values.location}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.location && Boolean(formik.errors.location)}
//               helperText={formik.touched.location && formik.errors.location}
//             />
//             <TextField
//               sx={{ mb: 2 }}
//               fullWidth
//               id="email"
//               label="E-mail"
//               name='email'
//               placeholder="E-mail"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             <TextField
//               sx={{ mb: 2 }}
//               fullWidth
//               id="password"
//               name="password"
//               label="Password"
//               type="password"
//               placeholder="Password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />
//             <TextField
//               sx={{ mb: 2 }}
//               fullWidth
//               id="confirmPassword"
//               name="confirmPassword"
//               label="Confirm Password"
//               type="password"
//               placeholder="Confirm Password"
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//               helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//             />
//             {loading && <Typography>Loading...</Typography>}
//             {error && <Typography color="error">{error}</Typography>}
//             {success && <Typography color="primary">Registration Successful!</Typography>}
//             <Button fullWidth variant="contained" type='submit'>Register</Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default RegisterCompany;


import { Avatar, Box, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerCompany } from '../redux/actions/companyAction';

const validationSchema = yup.object({
  companyName: yup.string('Enter your Company Name').required('Company Name is required'),
  location: yup.string('Enter your Location').required('Location is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  confirmPassword: yup.string('Confirm your password').oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const RegisterCompany = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.companyRegister);

  const formik = useFormik({
    initialValues: {
      companyName: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(registerCompany(values));
    },
  });

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#3FA2F6" }}>
          <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' sx={{ width: '100%', maxWidth: 400, p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                <LockOpenIcon />
              </Avatar>
              <Typography variant="h5" mb={2}>Register Company</Typography>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                id="companyName"
                label="Company Name"
                name='companyName'
                placeholder="Company Name"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
              />
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                id="location"
                label="Location"
                name='location'
                placeholder="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
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
              {loading && <Typography>Loading...</Typography>}
              {error && <Typography color="error">{error}</Typography>}
              {success && <Typography color="primary">Registration Successful!</Typography>}
              <Button fullWidth variant="contained" type='submit'>Register</Button>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </>
  );
}

export default RegisterCompany;
