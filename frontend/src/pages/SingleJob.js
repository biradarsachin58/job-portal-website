// import { Card, CardContent, Stack, Typography } from '@mui/material'
// import { Box, Container } from '@mui/system'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import Footer from '../component/Footer'
// import LoadingBox from '../component/loadingBox'
// import Navbar from '../component/Navbar'
// import { jobLoadSingleAction } from '../redux/actions/jobAction'
// import Button from '@mui/material/Button'
// import { userApplyJobAction, userHistoryJobAction } from '../redux/actions/userAction'


// const SingleJob = () => {
//     const dispatch = useDispatch();
//     const { singleJob, loading } = useSelector(state => state.singleJob)
//     const { id } = useParams();
//     useEffect(() => {
//         dispatch(jobLoadSingleAction(id));
//     }, [dispatch, id]);

//     const userJobHistory = () => {
//         dispatch(userHistoryJobAction({
//             title: singleJob && singleJob.title,
//             description: singleJob && singleJob.description,
//             salary: singleJob && singleJob.salary,
//             location: singleJob && singleJob.location
//         }))
//     }

//     const applyForAJob = () => {
//         dispatch(userApplyJobAction(id)); // Using job ID from params
//     };  

//     return (
//         <>

//             <Box sx={{ bgcolor: "#fafafa" }}>

//                 <Navbar />
//                 <Box sx={{ height: '85vh' }}>
//                     <Container sx={{ pt: '30px' }}>

//                         <Stack
//                             direction={{ xs: 'column', sm: 'row' }}
//                             spacing={{ xs: 1, sm: 2, md: 4 }}
//                         >
//                             <Box sx={{ flex: 4, p: 2 }}>

//                                 {
//                                     loading ? <LoadingBox /> :

//                                         <Card>
//                                             <CardContent>
//                                                 <Typography variant="h5" component="h3">
//                                                     {singleJob && singleJob.title}
//                                                 </Typography>
//                                                 <Typography variant="body2">
//                                                     <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singleJob && singleJob.salary}
//                                                 </Typography>
//                                                 {/* <Typography variant="body2">
//                                                     <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singleJob && singleJob.jobType ? singleJob.jobType.jobTypeName : "No category"}
//                                                 </Typography> */}
//                                                 <Typography variant="body2">
//                                                     <Box component="span" sx={{ fontWeight: 700 }}>Skills Required</Box>: ${singleJob && singleJob.skillsRequired}
//                                                 </Typography>
//                                                 <Typography variant="body2">
//                                                     <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singleJob && singleJob.location}
//                                                 </Typography>
//                                                 <Typography variant="body2" sx={{ pt: 2 }}>
//                                                     {/* <h3>Job description:</h3> */}
//                                                     {singleJob && singleJob.description}
//                                                 </Typography>
//                                             </CardContent>
//                                         </Card>
//                                 }
//                             </Box>
//                             <Box sx={{ flex: 1, p: 2 }}>
//                                 <Card sx={{ p: 2 }}>
//                                 <Button onClick={() => { applyForAJob(); userJobHistory(); }} sx={{ fontSize: "13px" }} variant='contained'>Apply for this Job</Button>
//                                 </Card>
//                             </Box>

//                         </Stack>

//                     </Container>
//                 </Box>
//                 <Footer />
//             </Box>
//         </>
//     )
// }

// export default SingleJob

import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/loadingBox'
import Navbar from '../component/Navbar'
import { jobLoadSingleAction } from '../redux/actions/jobAction'
import Button from '@mui/material/Button'
import { userApplyJobAction, userHistoryJobAction } from '../redux/actions/userAction'

const SingleJob = () => {
    const dispatch = useDispatch();
    const { singleJob, loading } = useSelector(state => state.singleJob)
    const { id } = useParams();

    useEffect(() => {
        dispatch(jobLoadSingleAction(id));
    }, [dispatch, id]);

    const userJobHistory = () => {
        dispatch(userHistoryJobAction({
            companyName: singleJob && singleJob.companyName,
            title: singleJob && singleJob.title,
            description: singleJob && singleJob.description,
            salary: singleJob && singleJob.salary,
            skillsRequired: singleJob && singleJob.skillsRequired,
            location: singleJob && singleJob.location
        }))
    }

    const applyForAJob = () => {
        dispatch(userApplyJobAction(id)); // Using job ID from params
    };

    return (
        <>
            <Box sx={{ bgcolor: "#fafafa" }}>
                <Navbar />
                <Box sx={{ minHeight: '85vh', pt: 4 }}>
                    <Container>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                        >
                            <Box sx={{ flex: 4 }}>
                                {
                                    loading ? <LoadingBox /> :
                                        <Card sx={{ mb: 4, p: 3 }}>
                                            <CardContent>
                                                <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
                                                    {singleJob && singleJob.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Company:</Box> ${singleJob && singleJob.companyName}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Salary:</Box> ${singleJob && singleJob.salary}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Skills Required:</Box> {singleJob && singleJob.skillsRequired}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mb: 1 }}>
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Location:</Box> {singleJob && singleJob.location}
                                                </Typography>
                                                <Typography variant="body1" sx={{ pt: 2 }}>
                                                    {singleJob && singleJob.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                }
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Card sx={{ p: 3 }}>
                                    <Button
                                        onClick={() => { applyForAJob(); userJobHistory(); }}
                                        sx={{ fontSize: "15px", p: 1.5 }}
                                        variant='contained'
                                        fullWidth
                                    >
                                        Apply for this Job
                                    </Button>
                                </Card>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default SingleJob
