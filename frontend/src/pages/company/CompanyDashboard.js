// // import React, { useEffect } from 'react';
// // import { Box, Button, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchCompanyJobs } from '../../redux/actions/companyAction'; // Ensure you have this action
// // import Navbar from '../../component/Navbar'; // Your Navbar component
// // import Footer from '../../component/Footer'; // Your Footer component
// // import { useNavigate } from 'react-router-dom';

// // const CompanyDashboard = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const { jobs, loading, error } = useSelector(state => state.loadCompanyJobs); // Adjust this selector as per your state

// //     useEffect(() => {
// //         dispatch(fetchCompanyJobs());
// //     }, [dispatch]);

// //     const handleCreateJob = () => {
// //         navigate('/job/create'); // Define this route for job creation
// //     };

// //     const handleViewApplications = (jobId) => {
// //         navigate(`/${jobId}/applications`); // Define this route to view applications
// //     };

// //     return (
// //         <>
// //             <Navbar />
// //             <Box sx={{ padding: 3 }}>
// //                 <Typography variant="h4" sx={{ marginBottom: 3 }}>Company Dashboard</Typography>
// //                 <Button variant="contained" color="primary" onClick={handleCreateJob}>Create Job</Button>
// //                 <Grid container spacing={3} sx={{ marginTop: 3 }}>
// //                     {loading ? (
// //                         <Typography variant="h6">Loading...</Typography>
// //                     ) : error ? (
// //                         <Typography variant="h6" color="error">{error}</Typography>
// //                     ) : (
// //                         jobs.map((job) => (
// //                             <Grid item xs={12} md={6} lg={4} key={job._id}>
// //                                 <Card>
// //                                     <CardContent>
// //                                         <Typography variant="h5">{job.title}</Typography>
// //                                         <Typography variant="body2" color="textSecondary">{job.description}</Typography>
// //                                     </CardContent>
// //                                     <CardActions>
// //                                         <Button size="small" color="primary" onClick={() => handleViewApplications(job._id)}>View Applications</Button>
// //                                         <Button size="small" color="secondary">Edit Job</Button>
// //                                     </CardActions>
// //                                 </Card>
// //                             </Grid>
// //                         ))
// //                     )}
// //                 </Grid>
// //             </Box>
// //             <Footer />
// //         </>
// //     );
// // };

// // export default CompanyDashboard;


// // import React, { useEffect } from 'react';
// // import { Box, Button, Typography, Grid, Card, CardContent, CardActions, CircularProgress, Alert } from '@mui/material';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchCompanyJobs } from '../../redux/actions/companyAction'; // Ensure you have this action
// // import Navbar from '../../component/Navbar'; // Your Navbar component
// // import Footer from '../../component/Footer'; // Your Footer component
// // import { useNavigate } from 'react-router-dom';

// // const CompanyDashboard = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const { jobs, loading, error } = useSelector(state => state.loadCompanyJobs); // Adjust this selector as per your state

// //     useEffect(() => {
// //         dispatch(fetchCompanyJobs());
// //     }, [dispatch]);

// //     const handleCreateJob = () => {
// //         navigate('/job/create'); // Define this route for job creation
// //     };

// //     const handleViewApplications = (jobId) => {
// //         navigate(`/${jobId}/applications`); // Define this route to view applications
// //     };

// //     // const handleEditJob = () => {
// //     //     navigate('/job/edit');
// //     // }

// //     return (
// //         <>
// //             <Navbar />
// //             <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 64px)' }}>
// //                 <Typography variant="h4" sx={{ marginBottom: 3 }}>Company Dashboard</Typography>
// //                 <Button 
// //                     variant="contained" 
// //                     color="primary" 
// //                     onClick={handleCreateJob} 
// //                     sx={{ marginBottom: 3 }}
// //                 >
// //                     Create Job
// //                 </Button>
// //                 {loading ? (
// //                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
// //                         <CircularProgress />
// //                     </Box>
// //                 ) : error ? (
// //                     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
// //                         <Alert severity="error">{error}</Alert>
// //                     </Box>
// //                 ) : (
// //                     <Grid container spacing={3}>
// //                         {jobs.map((job) => (
// //                             <Grid item xs={12} md={6} lg={4} key={job._id}>
// //                                 <Card sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3 }}>
// //                                     <CardContent>
// //                                         <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{job.title}</Typography>
// //                                         <Typography variant="body2" color="textSecondary">{job.description}</Typography>
// //                                     </CardContent>
// //                                     <CardActions>
// //                                         <Button 
// //                                             size="small" 
// //                                             color="primary" 
// //                                             onClick={() => handleViewApplications(job._id)}
// //                                             sx={{ fontWeight: 'bold' }}
// //                                         >
// //                                             View Applications
// //                                         </Button>
// //                                         <Button 
// //                                             size="small" 
// //                                             color="secondary"
// //                                             //onClick={() => handleEditJob(job._id)} 
// //                                             sx={{ fontWeight: 'bold' }}
// //                                         >
// //                                             Edit Job
// //                                         </Button>
// //                                     </CardActions>
// //                                 </Card>
// //                             </Grid>
// //                         ))}
// //                     </Grid>
// //                 )}
// //             </Box>
// //             <Footer />
// //         </>
// //     );
// // };

// // export default CompanyDashboard;

// import React, { useEffect } from 'react';
// import { Box, Button, Typography, Grid, Card, CardContent, CardActions, CircularProgress, Alert } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCompanyJobs } from '../../redux/actions/companyAction'; // Ensure you have this action
// import { deleteSingleJobAction } from '../../redux/actions/jobAction'; // Import the delete job action
// import Navbar from '../../component/Navbar'; // Your Navbar component
// import Footer from '../../component/Footer'; // Your Footer component
// import { useNavigate } from 'react-router-dom';

// const CompanyDashboard = () => {
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
//             <Navbar />
//             <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 64px)' }}>
//                 <Typography variant="h4" sx={{ marginBottom: 3 }}>Company Dashboard</Typography>
//                 <Button 
//                     variant="contained" 
//                     color="primary" 
//                     onClick={handleCreateJob} 
//                     sx={{ marginBottom: 3 }}
//                 >
//                     Create Job
//                 </Button>
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
//                                 <Card sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3 }}>
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
//             <Footer />
//         </>
//     );
// };

// export default CompanyDashboard;

// import { Typography, Box } from '@mui/material'
// import { Stack } from '@mui/system'
// import React, { useEffect } from 'react'
// import StatComponent from '../../component/StatComponent'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import WorkIcon from '@mui/icons-material/Work';
// import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment'
// import { fetchCompanyDetails } from '../../redux/actions/companyAction';

// const CompanyDashboard = () => {
//     const { company } = useSelector(state => state.companyDetails);
//     //console.log(`data of comapny ${company}`)
//     return (
//         <>
//             <Box>

//                 <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
//                     Dashboard
//                 </Typography>
//                 <Stack
//                     direction={{ xs: 'column', sm: 'row' }}
//                     spacing={{ xs: 1, sm: 2, md: 4 }}
//                 >

//                     <StatComponent
//                         value={company && moment(company.createdAt).format('YYYY / MM / DD')}
//                         icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
//                         description="Member since"
//                         money=''
//                     />
//                     {/* <StatComponent
//                         value={user && user.jobsHistory.length}
//                         icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
//                         description="Number of jobs submitted"
//                         money=''
//                     /> */}


//                 </Stack>
//             </Box>

//         </>
//     )
// }

// export default CompanyDashboard;

import React, { useEffect } from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import { Stack } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { fetchCompanyDetails, fetchCompanyJobs } from '../../redux/actions/companyAction';
import StatComponent from '../../component/StatComponent';
import WorkIcon from '@mui/icons-material/Work';

const CompanyDashboard = () => {
    const dispatch = useDispatch();
    const { company, loading, error } = useSelector(state => state.companyDetails);
    const {jobs} = useSelector(state => state.loadCompanyJobs);

    useEffect(() => {
        dispatch(fetchCompanyDetails());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCompanyJobs());
    }, [dispatch]);

    

    //console.log(`count : ${jobs}`);
    
    return (
        <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 64px)' }}>
            <Typography variant="h4" sx={{ color: 'black', pb: 3 }}>
            {company ? company.companyName : 'Loading...'}
            </Typography>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <Alert severity="error">{error}</Alert>
                </Box>
            ) : (
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <StatComponent
                        value={company && moment(company.createdAt).format('YYYY / MM / DD')}
                        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Member since"
                        money=''
                    />
                    <StatComponent
                        value={jobs && jobs.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Number of jobs created"
                        money=''
                    />
                    
                </Stack>
            )}
        </Box>
    );
};

export default CompanyDashboard;






