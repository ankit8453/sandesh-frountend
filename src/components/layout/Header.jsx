import { AppBar, Backdrop, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { Suspense, lazy, useState } from 'react';
import { grey } from '../../constants/color';
import { Box } from '@mui/system';
import {Menu as MenuIcon, Search, Add as AddIcon, Group, Logout, Notifications,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Sandesh from "../../assets/2.png";
const SerchDilog = lazy(() => import("../specific/Search"));
const NotificationDilog = lazy(() => import("../specific/Notifications"));
const NewGroupDilog = lazy(() => import("../specific/NewGroup"));


const Header = () => {

    const navigate = useNavigate();
  
  const [isMobile, setIsMobile] = useState(false);
  const [isSerch, setIsSerch] = useState(false);  
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  }
  const openSerch = () => {
    setIsSerch((prev) => !prev);
  }
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  }
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  }
  const navigateToGroup = () => navigate("/groups");
  
  const logOutHandler = () => {
    console.log("LogOut");
  }
  return (
    <>
      <Box sx={{ flexGrow: 1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor: grey,}}>
          <Toolbar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"},}}>Sandesh</Typography>
            <Box sx={{ display: { xs: "block", sm: "none"},}}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1,}}/>
            <Box>
              <IconBtn title={"Serch"} icon={<Search />} onClick={openSerch} />
              <IconBtn title={"NewGroup"} icon={<AddIcon />} onClick={openNewGroup} />
              <IconBtn title={"Manage Group"} icon={<Group />} onClick={navigateToGroup} />
              <IconBtn title={"Notification"} icon={<Notifications />} onClick={openNotification} />
              <IconBtn title={"Log Out"} icon={<Logout />} onClick={logOutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSerch && (<Suspense fallback={<Backdrop open />}>
        <SerchDilog/>
      </Suspense>)}
      {isNotification && (<Suspense fallback={<Backdrop open />}>
        <NotificationDilog/>
      </Suspense>)}
      {isNewGroup && (<Suspense fallback={<Backdrop open />}>
        <NewGroupDilog/>
      </Suspense>)}
    </>
  );
};

const IconBtn = ({title, icon, onClick}) => {
  return (
    <Tooltip title={title}>
        <IconButton color='inherit' onClick={onClick}>
          {icon}
        </IconButton>
    </Tooltip>
  );
}

export default Header;