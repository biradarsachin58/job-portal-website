// components/DashCreateJob.js

import React from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { registerAjobAction } from '../../redux/actions/jobAction'; // Update the path accordingly

// Form validation schema using Yup
const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    salary: yup.string().required('Salary is required'),
    location: yup.string().required('Location is required'),
});

const DashCreateJob = () => {
    const dispatch = useDispatch();

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            companyName: '',
            title: '',
            description: '',
            salary: '',
            skillsRequired: '',
            location: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAjobAction(values)); // Dispatch Redux action to create job
            actions.resetForm();
        },
    });

    return (
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4 }}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%', maxWidth: 600, p: 3, bgcolor: '#96C9F4', borderRadius: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Register a Job
                </Typography>
                <TextField
                    fullWidth
                    id="companyName"
                    name="companyName"
                    label="companyName"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="salary"
                    name="salary"
                    label="Salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.salary && Boolean(formik.errors.salary)}
                    helperText={formik.touched.salary && formik.errors.salary}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="skillsRequired"
                    name="skillsRequired"
                    label="skillsRequired"
                    value={formik.values.skillsRequired}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.skillsRequired && Boolean(formik.errors.skillsRequired)}
                    helperText={formik.touched.skillsRequired && formik.errors.skillsRequired}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="location"
                    name="location"
                    label="Location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}
                    sx={{ mb: 2 }}
                />
                {/* <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? <CircularProgress size={24} /> : 'Create Job'}
                </Button> */}

                <Button 
                    type="submit" 
                    variant="contained" 
                    disabled={formik.isSubmitting} 
                    sx={{ backgroundColor: '#2F3645', '&:hover': { backgroundColor: '#2F3645' } }} // Set the color
                >
                    {formik.isSubmitting ? <CircularProgress size={24} /> : 'Create Job'}
                </Button>
                
            </Box>
        </Box>
    );
};

export default DashCreateJob;
