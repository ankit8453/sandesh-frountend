import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from '@mui/icons-material';
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar sx={{
        width: 200,
        height:200,
        objectFit: "contain",
        marginBottom: "1rem",
        border: "5px solid white",
      }} />
      <Profilecard heading={"BioData"} text={"My name is Ankit Pawar"} />
      <Profilecard heading={"Username"} text={"ankit84563"} Icon={<UserNameIcon />} />
      <Profilecard heading={"Name"} text={"Ankit Pawar"} Icon={<FaceIcon />} />
      <Profilecard heading={"Date"} text={moment('2024-03-01T18:30:00.000z').fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  )
}

const Profilecard = ({text, Icon, heading}) => (
  <Stack 
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={'white'}
    textAlign={"center"}>
      {Icon && Icon}

      <Stack>
        <Typography variant='body1'>{text}</Typography>
        <Typography color={"rgba(0,0,0,0.4)"} variant='caption'>{heading}</Typography>
      </Stack>
  </Stack>
)

export default Profile