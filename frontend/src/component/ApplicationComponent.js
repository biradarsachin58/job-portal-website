// // // src/components/JobApplications.js
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useParams } from 'react-router-dom';
// // import { fetchJobApplicationsAction } from '../redux/actions/jobAction';
// // import LoadingBox from './loadingBox';
// // import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

// // const JobApplications = () => {
// //     const { id } = useParams();
// //     const dispatch = useDispatch();
// //     const { applications=[] ,loading, error } = useSelector((state) => state.jobApplications);

// //     useEffect(() => {
// //         dispatch(fetchJobApplicationsAction(id));
// //     }, [dispatch, id]);

// //     return (
// //         <Box sx={{ padding: 3 }}>
// //             <Typography variant="h4" sx={{ marginBottom: 3 }}>Job Applications</Typography>
// //             {loading ? (
// //                 <LoadingBox />
// //             ) : error ? (
// //                 <Typography variant="h6" color="error">{error}</Typography>
// //             ) : (
// //                 <List>
// //                     {applications.map((application) => (
// //                         <ListItem key={application._id}>
// //                             <ListItemText
// //                                 primary={application.FirstName}
// //                                 secondary={application.email}
// //                             />
// //                         </ListItem>
// //                     ))}
// //                 </List>
// //             )}
// //         </Box>
// //     );
// // };

// // export default JobApplications;


// // src/components/JobApplications.js
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useParams } from 'react-router-dom';
// // import { fetchJobApplicationsAction } from '../redux/actions/jobAction';
// // import LoadingBox from './loadingBox';
// // import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

// // const JobApplications = () => {
// //     const { id } = useParams();
// //     const dispatch = useDispatch();
// //     const { applications = [], loading, error } = useSelector((state) => state.jobApplications);

// //     useEffect(() => {
// //         dispatch(fetchJobApplicationsAction(id));
// //     }, [dispatch, id]);

// //     return (
// //         <Box sx={{ padding: 3 }}>
// //             <Typography variant="h4" sx={{ marginBottom: 3 }}>Job Applications</Typography>
// //             {loading ? (
// //                 <LoadingBox />
// //             ) : error ? (
// //                 <Typography variant="h6" color="error">{error}</Typography>
// //             ) : (
// //                 <List>
// //                     {applications.map((application) => (
// //                         <ListItem key={application._id}>
// //                             <ListItemText
// //                                 primary={application.user.firstName}
// //                                 secondary={application.user.email}
// //                             />
// //                         </ListItem>
// //                     ))}
// //                 </List>
// //             )}
// //         </Box>
// //     );
// // };

// // export default JobApplications;

// src/components/JobApplications.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchJobApplicationsAction } from '../redux/actions/jobAction';
// import LoadingBox from '../component/loadingBox';
// import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

// const JobApplications = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { applications = [], loading, error } = useSelector((state) => state.jobApplications);

//     useEffect(() => {
//         dispatch(fetchJobApplicationsAction(id));
//     }, [dispatch, id]);

//     useEffect(() => {
//         console.log('Applications state:', applications); // Check if applications are correctly fetched
//     }, [applications]);

//     return (
//         <Box sx={{ padding: 3 }}>
//             <Typography variant="h4" sx={{ marginBottom: 3 }}>Job Applications</Typography>
//             {loading ? (
//                 <LoadingBox />
//             ) : error ? (
//                 <Typography variant="h6" color="error">{error}</Typography>
//             ) : applications.length === 0 ? (
//                 <Typography variant="body1">No applications found.</Typography>
//             ) : (
//                 <List>
//                     {applications.map((application) => (
//                         <React.Fragment key={application._id}>
//                             <ListItem>
//                                 <ListItemText
//                                     primary={`${application.userDetails.firstName} ${application.userDetails.lastName}`}
//                                     secondary={application.userDetails.email}
//                                 />
//                                 <Typography variant="body2" color="textSecondary">
//                                     Status: {application.status}
//                                 </Typography>
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Phone"
//                                     secondary={application.userDetails.mobileNo}
//                                 />
//                             </ListItem> 
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Address"
//                                     secondary={application.userDetails.address}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="College"
//                                     secondary={application.userDetails.college}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Graduation Year"
//                                     secondary={application.userDetails.graduationYear}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Resume"
//                                     secondary={application.userDetails.resume}
//                                 />
//                             </ListItem>
//                             <Divider />
//                         </React.Fragment>
//                     ))}
//                 </List>
//             )}
//         </Box>
//     );
// };

// export default JobApplications;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchJobApplicationsAction } from '../redux/actions/jobAction';
// import LoadingBox from '../component/loadingBox';
// import { Box, Typography, List, ListItem, ListItemText, Divider, Link as MuiLink } from '@mui/material';

// const JobApplications = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { applications = [], loading, error } = useSelector((state) => state.jobApplications);

//     useEffect(() => {
//         dispatch(fetchJobApplicationsAction(id));
//     }, [dispatch, id]);

//     useEffect(() => {
//         console.log('Applications state:', applications); // Check if applications are correctly fetched
//     }, [applications]);

//     return (
//         <Box sx={{ padding: 3 }}>
//             <Typography variant="h4" sx={{ marginBottom: 3 }}>Job Applications</Typography>
//             {loading ? (
//                 <LoadingBox />
//             ) : error ? (
//                 <Typography variant="h6" color="error">{error}</Typography>
//             ) : applications.length === 0 ? (
//                 <Typography variant="body1">No applications found.</Typography>
//             ) : (
//                 <List>
//                     {applications.map((application) => (
//                         <React.Fragment key={application._id}>
//                             <ListItem>
//                                 <ListItemText
//                                     primary={`${application.userDetails.firstName} ${application.userDetails.lastName}`}
//                                     secondary={application.userDetails.email}
//                                 />
//                                 <Typography variant="body2" color="textSecondary">
//                                     Status: {application.status}
//                                 </Typography>
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Phone"
//                                     secondary={application.userDetails.mobileNo}
//                                 />
//                             </ListItem> 
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Address"
//                                     secondary={application.userDetails.address}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="College"
//                                     secondary={application.userDetails.college}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="Graduation Year"
//                                     secondary={application.userDetails.graduationYear}
//                                 />
//                             </ListItem>
//                             <ListItem>
//                                 <ListItemText
//                                     primary="resume"
//                                     secondary={
//                                         <MuiLink href={`http://localhost:8000/uploads/${application.userDetails.resume}`} target="_blank" rel="noopener noreferrer">
//                                             View Resume
//                                         </MuiLink>
//                                     }
//                                 />
//                             </ListItem>
//                             <Divider />
//                         </React.Fragment>
//                     ))}
//                 </List>
//             )}
//         </Box>
//     );
// };

// export default JobApplications;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJobApplicationsAction } from '../redux/actions/jobAction';
import LoadingBox from '../component/loadingBox';
import { Box, Typography, List, ListItem, ListItemText, Link as MuiLink, Paper } from '@mui/material';

const JobApplications = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { applications = [], loading, error } = useSelector((state) => state.jobApplications);

    useEffect(() => {
        dispatch(fetchJobApplicationsAction(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log('Applications state:', applications); // Check if applications are correctly fetched
    }, [applications]);

    return (
        <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center',  backgroundColor: '#009FBD', minHeight: '100vh' }}>
            <Box sx={{ maxWidth: '600px', width: '100%' }}>
                <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>Job Applications</Typography>
                {loading ? (
                    <LoadingBox />
                ) : error ? (
                    <Typography variant="h6" color="error">{error}</Typography>
                ) : applications.length === 0 ? (
                    <Typography variant="body1">No applications found.</Typography>
                ) : (
                    <div>
                        {applications.map((application) => (
                            <Paper key={application._id} elevation={3} sx={{ marginBottom: 2, padding: 2 }}>
                                <List disablePadding>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">First Name:</Typography>}
                                            secondary={application.userDetails.firstName}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Last Name:</Typography>}
                                            secondary={application.userDetails.lastName}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right',  fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Email:</Typography>}
                                            secondary={application.userDetails.email}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Phone:</Typography>}
                                            secondary={application.userDetails.mobileNo}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Address:</Typography>}
                                            secondary={application.userDetails.address}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">College:</Typography>}
                                            secondary={application.userDetails.college}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Graduation Year:</Typography>}
                                            secondary={application.userDetails.graduationYear}
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                    <ListItem divider>
                                        <ListItemText
                                            primary={<Typography variant="subtitle1" fontWeight="bold">Resume:</Typography>}
                                            secondary={
                                                <MuiLink
                                                    href={`http://localhost:8000/uploads/${application.userDetails.resume}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Resume
                                                </MuiLink>
                                            }
                                            primaryTypographyProps={{ sx: { flex: '0 0 200px' } }}
                                            secondaryTypographyProps={{ sx: { textAlign: 'right', fontSize: '1.1rem' } }}
                                        />
                                    </ListItem>
                                </List>
                            </Paper>
                        ))}
                    </div>
                )}
            </Box>
        </Box>
    );
};

export default JobApplications;














