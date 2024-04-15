// login-as page


import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Button, Typography, Avatar } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import ParentingHandsIcon from '@mui/icons-material/ParentingHands';


import ChildCareIcon from '@mui/icons-material/ChildCare';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SchoolIcon from '@mui/icons-material/School';

const RootContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(4),
}));

const CardContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
}));

const AvatarContainer = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
}));
function LoginPage() {
  return (
    <RootContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <AvatarContainer>
              <ChildCareIcon />
            </AvatarContainer>
            <Typography variant="h5">Students</Typography>
            <Button variant="contained" color="primary"></Button>
          </CardContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <AvatarContainer>
              <FamilyRestroomIcon />
            </AvatarContainer>
            <Typography variant="h5">Parents</Typography>
            <Button variant="contained" color="primary"></Button>
          </CardContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <AvatarContainer>
              <SchoolIcon />
            </AvatarContainer>
            <Typography variant="h5">Teachers</Typography>
            <Button variant="contained" color="primary"></Button>
          </CardContainer>
        </Grid>
      </Grid>
    </RootContainer>
  );
}

export default LoginPage;
