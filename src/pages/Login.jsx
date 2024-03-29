import React, { useState } from 'react'
import {Button, Container, Grid, IconButton, Link, Paper, Stack, TextField, Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {CameraAlt,} from "@mui/icons-material";
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validators';
import background from "../assets/1.jpg";

const Login = () => {

  const [isLogin,setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);
  
  const name =  useInputValidation("");
  const surname =  useInputValidation("");
  const bio =  useInputValidation("");
  const username =  useInputValidation("", usernameValidator);
  const password =  useStrongPassword();

  const avatar = useFileHandler("single",2);
  
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
        {isLogin ?(
           <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Login</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem",}
            }>
              <TextField 
              required
              fullWidth
              margin="normal"
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              value={username.value}
              onChange={username.changeHandler}
              />
              <TextField 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password.value}
              onChange={password.changeHandler}
              />
              <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Sign In</Button>
              <Grid container>
            
              <Grid item>
                <Button fullWidth variant='text' onClick={toggleLogin}>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
            </form>
           </>
          ) : (
            <>
            <Typography component="h1" variant="h5" paddingBottom={1}>Sign Up</Typography>
            <Stack position={"relative"} width={"9rem"} margin={"auto"}>
                <Avatar sx={{
                  width: "9rem",
                  height: "9rem",
                  objectFit: "contain",
                }}
                src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right:"0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }} 
                  component = "label"
                >
                  <>
                    <CameraAlt/>
                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>
              {
                  avatar.error && (
                    <Typography color="error" variant='caption'>
                      {avatar.error}
                    </Typography>
                  )
                }
            <form style={{
              width: "100%",
              marginTop: "1rem",}
            }>
              
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={name.value}
                  onChange={name.changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={surname.value}
                  onChange={surname.changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Bio"
                  label="Bio"
                  name="Bio"
                  autoComplete="Bio"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {
                  username.error && (
                    <Typography color="error" variant='caption'>
                      {username.error}
                    </Typography>
                  )
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {
                  password.error && (
                    <Typography color="error" variant='caption'>
                      {password.error}
                    </Typography>
                  )
                }
              </Grid>
              </Grid>
              <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Sign In</Button>
              <Grid container>
            
              <Grid item>
                <Button fullWidth variant='text' onClick={toggleLogin}>
                  {"Already have an account? Sign in"}
                </Button>
              </Grid>
            </Grid>
            </form>
           </>
          )}





       </Paper>
    </Container>
   </div> 
  )
}

export default Login