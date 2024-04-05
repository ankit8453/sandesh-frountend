import { Close, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon,  Groups as GroupsIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon, } from '@mui/icons-material';
import { Drawer, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link as LinkComp, Navigate, useLocation } from 'react-router-dom';
import { grey } from '../../constants/color';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from "../../redux/thunks/admin";

const Link = styled(LinkComp)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users-management",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/chats-management",
        icon: <GroupsIcon />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />,
    },
];

const Sidebar = ({w = "100%"}) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const logoutHandler = () => {
      dispatch(adminLogout());
    };

    return (
        <Stack width={w} direction={"column"}  p={"3rem"} spacing={"3rem"} >
            <Typography variant='h3' textTransform={"uppercase"}>Admin</Typography>

            <Stack spacing={"1rem"}>

                {
                    adminTabs.map((tab) => (
                        <Link 
                          key={tab.path} 
                          to={tab.path}
                          sx={
                            location.pathname === tab.path && {
                                bgcolor: grey,
                                color: "white",
                                ":hover": { color: "wheat"},
                            }
                          }
                        >
                            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                                {tab.icon}
                                <Typography>{tab.name}</Typography>
                            </Stack>
                        </Link>
                    ))
                }
                <Link onClick={logoutHandler}
                        >
                            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                                <ExitToAppIcon />
                                <Typography>LogOut</Typography>
                            </Stack>
                        </Link>
            </Stack>
        </Stack>
    );
};



const AdminLayout = ({children}) => {
  const { isAdmin } = useSelector((state) => state.auth);

  const [isMobile, setIsMobile] = useState(false);

  const handleIt = () => setIsMobile(!isMobile);

  const handleClose = () => setIsMobile(false);

  if(!isAdmin) return <Navigate to="/admin" />;

  return (
    <Grid container minHeight={"100vh"}>

        <Box 
          sx={{
            display: { xs: "block", md: "none"},
            position: "fixed",
            right: "1rem",
            top: "1rem",
          }}
        >
            <IconButton onClick={handleIt}>
              {
                isMobile ? <Close /> : <MenuIcon />
              }
            </IconButton>
        </Box>

        <Grid item 
          md={4}
          lg={3}
          sx={{display: { xs: "none", md:"block" } }}
          > 
          <Sidebar />
          </Grid>

          <Grid 
            item
            xs={12}
            md={8}
            lg={9}
            sx={{
                bgcolor: "#f5f5f5",
            }}
            > {children} </Grid>

        <Drawer open={isMobile} onClose={handleClose} >

            <Sidebar w="50vw" />
            
        </Drawer>    
    </Grid>
  );
};

export default AdminLayout;