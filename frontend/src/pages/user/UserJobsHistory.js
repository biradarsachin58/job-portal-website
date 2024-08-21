
// import { Typography } from '@mui/material'
// import { Box } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import CardElement from '../../component/cardElement'
// import { userProfileAction } from '../../redux/actions/userAction'

// const UserJobsHistory = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(userProfileAction());
//     }, [dispatch]);

//     return (
//         <>
//             <Box>
//                 <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
//                 <Box>
//                     {
//                         user && user.jobsHistory.map((history, i) => (
//                             <CardElement
//                                 key={i}
//                                 id={history._id}
//                                 jobTitle={history.title}
//                                 description={history.description}
//                                 category=''
//                                 location={history.location}
//                             />
//                         ))
//                     }
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default UserJobsHistory

// import { Typography, Box } from '@mui/material';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userProfileAction } from '../../redux/actions/userAction';

// const UserJobsHistory = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(userProfileAction());
//     }, [dispatch]);

//     return (
//         <>
//             <Box>
//                 <Typography variant="h4" sx={{ color: "#fafafa" }}>Jobs History</Typography>
//                 <Box sx={{ mt: 2  }}>
//                     {user && user.jobsHistory.map((history, i) => (
//                         <Box key={i} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px', backgroundColor: "#96C9F4"}}>
//                             <Typography variant="h6" sx={{ color: "black" }}>{history.title}</Typography>
//                             <Typography variant="body1" sx={{ color: "black" }}>{history.description}</Typography>
//                             <Typography variant="body2" sx={{ color: "black" }}>{history.applicationStatus}</Typography>
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>
//         </>
//     );
// }

// export default UserJobsHistory;


import { Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAction } from '../../redux/actions/userAction';


const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    
    const dispatch = useDispatch();
    

    

    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa", mb: 3 }}>Jobs History</Typography>
                <Box sx={{ mt: 2 }}>
                    {user && user.jobsHistory.map((history, i) => (
                        <Box 
                            key={i}  
                            sx={{ 
                                mb: 3, 
                                p: 3, 
                                border: '1px solid #ccc', 
                                borderRadius: '8px', 
                                backgroundColor: "#96C9F4"
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                sx={{ color: "black", mb: 1 }}
                            >
                                {history.title}
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ color: "black", mb: 1 }}
                            >
                                {history.description}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ color: "black" }}
                            >
                               {history.location} 
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default UserJobsHistory;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Typography } from '@mui/material';
// import { fetchUserApplicationsAction, userProfileAction } from '../../redux/actions/userAction'; // Adjust the import paths based on your project structure

// const UserJobsHistory = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const { applications = [], loading, error } = useSelector(state => state.userApplications);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchUserApplicationsAction());  
//     }, [dispatch]);

//     useEffect(() => {
//         dispatch(userProfileAction());
//     }, [dispatch]);

//     return (
//         <Box>
//             <Typography variant="h4" sx={{ color: "#fafafa", mb: 3 }}>Jobs History</Typography>
//             <Box sx={{ mt: 2 }}>
//                 { applications && applications.map((application) => (
//                     <Box 
//                         key={application._id}  
//                         sx={{ 
//                             mb: 3, 
//                             p: 3, 
//                             border: '1px solid #ccc', 
//                             borderRadius: '8px', 
//                             backgroundColor: "#96C9F4"
//                         }}
//                     >
//                         <Typography 
//                             variant="h6" 
//                             sx={{ color: "black", mb: 1 }}
//                         >
//                             {application.jobDetails.companyName}
//                         </Typography>
//                         <Typography 
//                             variant="body1" 
//                             sx={{ color: "black", mb: 1 }}
//                         >
//                             {application.jobDetails.description}
//                         </Typography>
//                         <Typography 
//                             variant="body1" 
//                             sx={{ color: "black", mb: 1 }}
//                         >
//                             {application.status}
//                         </Typography>   
                        
//                     </Box>  
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default UserJobsHistory;




