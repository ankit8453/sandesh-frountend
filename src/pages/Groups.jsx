import React, { Suspense, lazy, memo, useEffect, useState } from 'react';
import { Backdrop, Button, ButtonGroup, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography, } from '@mui/material'
import {Add, Delete as DeleteIcon, Done, Edit, KeyboardBackspace as KeyboardBackspaceIcon,Menu as MenuIcon,} from '@mui/icons-material'
import { useNavigate,useSearchParams } from 'react-router-dom';
import {Box} from '@mui/system';
import {Link} from '../components/styles/StyledComponents';
import AvatarCard from '../components/shared/AvatarCard';
import {sampleChats, sampleUsers} from '../constants/sampleData';
import UserItem from '../components/shared/UserItem';
import { colorGradient } from '../constants/color';
const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"));
const AddMemberDialoge = lazy(() => import("../components/dialogs/AddMemberDialoge"));



const isAddMember = false;

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  console.log(chatId);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdated, setGroupNameUpdated] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);
  
  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdated);
  };

  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };

  const closeconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  }

  const openAddMemberHandler = () => {
    console.log("Add Member");
    closeconfirmDeleteHandler();
  };

  const deleteHandler = () =>{
    console.log("delete handle");
  }

  const remMemHandler = (id) => {
    console.log(id);
  };

  useEffect(() => {
    if(chatId){
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdated(`Group Name${chatId}`);
    }  
      

    return () => {
      setGroupName("");
      setGroupNameUpdated("");
      setIsEdit(false);
    }
  }, [chatId]);

  const IconBtns =  (
  <>
  <Box sx={{
    display: {
      xs: "block",
      sm: "none",
      position: "fixed",
      right: "1rem",
      top: "1rem",
    },
  }}>
    <IconButton onClick={handleMobile}>
      <MenuIcon />
    </IconButton>
  </Box>
  <Tooltip title="back" >

    <IconButton sx={{
      position: "absolute",
      top: "2rem",
      left: "2rem",
      bgcolor: "#1c1c1c",
      color: "whitesmoke",
      ":hover": {
        bgcolor: "rgba(0,0,0,0.7)"
      },
    }}
    onClick={navigateBack}
    >
      <KeyboardBackspaceIcon />
    </IconButton>
  </Tooltip>
  </>
  );
  const GroupName = (
  <Stack 
     direction={"row"} 
     alignItems={"center"}
     justifyContent={"center"}
     spacing={"1rem"}
     padding={"3rem"}
     >
    {isEdit ? (
      <>
        <TextField value={groupNameUpdated} onChange={e=>setGroupNameUpdated(e.target.value)} />
        <IconButton onClick={updateGroupName}><Done/></IconButton>
      </>
    ) : (
      <>
        <Typography variant="h4">{groupName}</Typography>
        <IconButton onClick={() => setIsEdit(true)}><Edit/></IconButton>
      </>
    )
    }
  </Stack>
  );
 
  const ButtonGroup = (
    <Stack 
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
      >
        <Button size='large' color='error' variant='outlined' startIcon={<DeleteIcon />} onClick={openconfirmDeleteHandler}>Delete Group</Button>
        <Button size='large' variant='contained'startIcon={<Add />} onClick={openAddMemberHandler}>Add Member </Button>
      </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid 
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        >
          <GroupLi myGroups={sampleChats} chatId={chatId}/>
        </Grid>

        <Grid item xs={12} sm={8} sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}>
          {IconBtns}
          {GroupName && (
          <>
            {GroupName}

            <Typography 
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
              >Members</Typography>

            <Stack 
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}  
              spacing={"2rem"}
              //bgcolor={"gainsboro"}
              height={"50vh"}
              overflow={"auto"}>
                

                {
                  sampleUsers.map((i) => (
                    <UserItem user={i} key={i._id} isAdded styling={{
                      boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                      padding: "1rem 2rem",
                      borderRadius: "1rem",
                    }} handler={remMemHandler}/>
                  ))
                }
                
              </Stack>

              {ButtonGroup}
          </>)}
        </Grid>

        {isAddMember && 
           <Suspense fallback={<Backdrop open /> }>
              <AddMemberDialoge/>
            </Suspense>}

        {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog 
              open={confirmDeleteDialog}
              handleClose={closeconfirmDeleteHandler} 
              deleteHandler={deleteHandler}/>
          </Suspense>
        )}

        <Drawer sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }} open={isMobileMenuOpen}
         onClose={handleMobileClose}>
          <GroupLi w={"50vw"} myGroups={sampleChats} chatId={chatId}/>
        </Drawer>

    </Grid>
  );
};

const GroupLi = ({ w = "100%", myGroups = [], chatId}) => (
  <Stack width={w} sx={{
    backgroundImage: colorGradient,
    height: "100vh",
    overflow: "auto",
  }}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => <GroupLiItem group={group} chatId={chatId} key={group._id} />)
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupLiItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
  <Link to={`?group=${_id}`} onClick={e=>{
    if(chatId === _id) e.preventDefault();
  }}>
   <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
     <AvatarCard avatar={avatar} size={40}/>
     <Typography>{name}</Typography>
   </Stack>
  </Link>
  );
});

export default Groups;