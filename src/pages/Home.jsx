import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Stack, Typography } from '@mui/material';
import sandeshIcon from '../assets/2.png'
const Home = () => {
  return (
    <Stack height={"100%"} justifyContent={"center"} textAlign={"center"} bgcolor={"rgba(0,0,0,0.1)"}>
      <img src={sandeshIcon} width={"200rem"} height={"200rem"} alt="Sandesh Icon"
                    style={{ margin: '0 auto' }} // Center align the image
                    />
      <Typography variant='h5'>
        Select person to chat with
      </Typography>
    </Stack>
  );
};

export default AppLayout()(Home);