import React, { useState } from 'react'
import {Button, Container, Paper, Stack, TextField, Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp';
import background from "../../assets/1.jpg";
import { Navigate } from 'react-router-dom';

const isAdmin = true;

const AdminLogin = () => {

    const secretKey = useInputValidation("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
    };

  if(isAdmin) return <Navigate to="/admin/dashboard" />

  return (
   <div style={{ backgroundImage:`url(${background})`,
   height: "100vh",
   backgroundSize: "cover",
   }}>
    <Container component={"main"} maxWidth="xs" sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Paper
       elevation={3} 
       sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Admin Login</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem",}
            } onSubmit={submitHandler}>
              <TextField 
              margin="normal"
              required
              fullWidth
              name="password"
              label="SecretKey"
              type="password"
              id="password"
              autoComplete="current-password"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              />
              <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            </form>
       </Paper>
    </Container>
   </div>
  );
}

export default AdminLogin;