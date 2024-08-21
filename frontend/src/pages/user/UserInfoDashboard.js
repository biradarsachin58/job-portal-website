// import { useTheme } from '@mui/material';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useSelector } from 'react-redux';



// const UserInfoDashboard = () => {
//     const { user } = useSelector(state => state.userProfile);
//     const { palette } = useTheme();
//     return (
//         <>
//             <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
//                 <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
//                     <CardContent>
//                         <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
//                             Personal Info
//                         </Typography>
//                         <hr style={{ marginBottom: "30px" }} />
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             First Name : {user && user.firstName}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             Last Name : {user && user.lastName}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             E-mail :  {user && user.email}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             Mobile-No :  {user && user.mobileNo}  
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             Address :  {user && user.address}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             College :  {user && user.college}
//                         </Typography>
//                         <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
//                             Graduation-Year :  {user && user.graduationYear}
//                         </Typography>
                        

//                     </CardContent>
//                 </Card>
//             </Box>
//         </>
//     )
// }

// export default UserInfoDashboard



import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
                <Card sx={{ minWidth: 275, bgcolor: "#80C4E9", p: 2, borderRadius: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: "black", pb: 2 }} gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>First Name:</strong> {user && user.firstName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>Last Name:</strong> {user && user.lastName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>E-mail:</strong> {user && user.email}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>Mobile No:</strong> {user && user.mobileNo}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>Address:</strong> {user && user.address}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>College:</strong> {user && user.college}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black", mb: 1 }}>
                            <strong>Graduation Year:</strong> {user && user.graduationYear}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default UserInfoDashboard;
