import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { grey, greyColor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {

  const user = {
    _id: "cnwdecnwnc",
    name: "Ankit Pawar"
  }

  const containerRef = useRef(null);

  return (
    <>
      <Stack 
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={greyColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >{sampleMessage.map((i) => (
        <MessageComponent key={i._id} message={i} user={user} />
      ))}
      </Stack>

      <form style={{height: "10%"}}>
        <Stack 
          direction={"row"} 
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
           sx={{
            position: "absolute",
            rotate: "30deg",
            left: "1.5rem",
          }}
           >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..."/>
          <IconButton 
            type='submit'
            sx={{
              rotate: "-30deg",
              bgcolor: grey,
              color: 'white',
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
            >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  )
}

export default AppLayout()(Chat);