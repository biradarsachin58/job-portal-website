// import React, { useEffect } from 'react';
// import { Box, Button, Typography, Grid, Card, CardContent, CardActions, CircularProgress, Alert } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCompanyJobs } from '../../redux/actions/companyAction'; // Ensure you have this action
// import { deleteSingleJobAction } from '../../redux/actions/jobAction'; // Import the delete job action
// import Navbar from '../../component/Navbar'; // Your Navbar component
// import Footer from '../../component/Footer'; // Your Footer component
// import { useNavigate } from 'react-router-dom';

// const DashCompanyJobs = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { jobs, loading, error } = useSelector(state => state.loadCompanyJobs); // Adjust this selector as per your state
//     const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = useSelector(state => state.deleteJob); // Selector for delete job state

//     useEffect(() => {
//         dispatch(fetchCompanyJobs());
//     }, [dispatch, deleteSuccess]); // Re-fetch jobs when a job is deleted

//     const handleCreateJob = () => {
//         navigate('/job/create'); // Define this route for job creation
//     };

//     const handleViewApplications = (jobId) => {
//         navigate(`/${jobId}/applications`); // Define this route to view applications
//     };

//     const handleDeleteJob = (jobId) => {
//         dispatch(deleteSingleJobAction(jobId));
//     };

//     // const handleEditJob = () => {
//     //     navigate('/job/edit');
//     // }

//     return (
//         <>
//             <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 64px)' }}>
                
                
//                 {loading ? (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//                         <CircularProgress />
//                     </Box>
//                 ) : error ? (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//                         <Alert severity="error">{error}</Alert>
//                     </Box>
//                 ) : (
//                     <Grid container spacing={3}>
//                         {jobs.map((job) => (
//                             <Grid item xs={12} md={6} lg={4} key={job._id}>
//                                 <Card sx={{ backgroundColor: '#E9C46A', borderRadius: 2, boxShadow: 3 }}>
//                                     <CardContent>
//                                         <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{job.title}</Typography>
//                                         <Typography variant="body2" color="textSecondary">{job.description}</Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button 
//                                             size="small" 
//                                             color="primary" 
//                                             onClick={() => handleViewApplications(job._id)}
//                                             sx={{ fontWeight: 'bold' }}
//                                         >
//                                             View Applications
//                                         </Button>
//                                         <Button 
//                                             size="small" 
//                                             color="secondary"
//                                             //onClick={() => handleEditJob(job._id)} 
//                                             sx={{ fontWeight: 'bold' }}
//                                         >
//                                             Edit Job
//                                         </Button>
//                                         <Button 
//                                             size="small" 
//                                             color="error"
//                                             onClick={() => handleDeleteJob(job._id)}
//                                             sx={{ fontWeight: 'bold' }}
//                                         >
//                                             Delete Job
//                                         </Button>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 )}
//                 {deleteLoading && (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
//                         <CircularProgress />
//                     </Box>
//                 )}
//                 {deleteSuccess && (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
//                         <Alert severity="success">Job deleted successfully!</Alert>
//                     </Box>
//                 )}
//                 {deleteError && (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
//                         <Alert severity="error">{deleteError}</Alert>
//                     </Box>
//                 )}
//             </Box>
           
//         </>
//     );
// };

// export default DashCompanyJobs;

import React, { useEffect } from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions, CircularProgress, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyJobs } from '../../redux/actions/companyAction'; // Ensure you have this action
import { deleteSingleJobAction } from '../../redux/actions/jobAction'; // Import the delete job action
import Navbar from '../../component/Navbar'; // Your Navbar component
import Footer from '../../component/Footer'; // Your Footer component
import { useNavigate } from 'react-router-dom';

const DashCompanyJobs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { jobs, loading, error } = useSelector(state => state.loadCompanyJobs); // Adjust this selector as per your state
    const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = useSelector(state => state.deleteJob); // Selector for delete job state

    useEffect(() => {
        dispatch(fetchCompanyJobs());
    }, [dispatch, deleteSuccess]); // Re-fetch jobs when a job is deleted

    const handleCreateJob = () => {
        navigate('/job/create'); // Define this route for job creation
    };

    const handleViewApplications = (jobId) => {
        navigate(`/${jobId}/applications`); // Define this route to view applications
    };

    const handleDeleteJob = (jobId) => {
        dispatch(deleteSingleJobAction(jobId));
    };

    return (
        <>
            <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 64px)' }}>
                
                
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {jobs.map((job) => (
                            <Card key={job._id} sx={{ backgroundColor: '#E9C46A', borderRadius: 2, boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{job.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        onClick={() => handleViewApplications(job._id)}
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        View Applications
                                    </Button>
                                    {/* <Button 
                                        size="small" 
                                        color="secondary"
                                        // onClick={() => handleEditJob(job._id)} 
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Edit Job
                                    </Button> */}
                                    <Button 
                                        size="small" 
                                        color="error"
                                        onClick={() => handleDeleteJob(job._id)}
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Delete Job
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                )}
                {deleteLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                        <CircularProgress />
                    </Box>
                )}
                {deleteSuccess && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                        <Alert severity="success">Job deleted successfully!</Alert>
                    </Box>
                )}
                {deleteError && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                        <Alert severity="error">{deleteError}</Alert>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default DashCompanyJobs;
