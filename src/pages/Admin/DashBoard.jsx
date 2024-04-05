import { AdminPanelSettingsRounded as AdminPanelSettingsRoundedIcon, Group, Message, Notifications, Person } from '@mui/icons-material';
import { useFetchData } from "6pp";
import { Container, Paper, Skeleton , Stack, Typography } from '@mui/material';
import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import moment from 'moment';
import {Box} from '@mui/system';
import { ApniButton, SerchField } from '../../components/styles/StyledComponents';
import { DoughnutChart, LineChart } from '../../components/specific/Charts';
import { server } from "../../constants/config";
import { useErrors } from "../../hooks/hook";

const DashBoard = () => {
  const { loading, data, error } = useFetchData(
    `${server}/api/v1/admin/stats`,
    "dashboard-stats"
  );

  const { stats } = data || {};

  useErrors([
    {
      isError: error,
      error: error,
    },
  ]);

  const AppBar = (
    <Paper 
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem"}}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <AdminPanelSettingsRoundedIcon sx={{ fontSize: "2rem"}} />
          <SerchField placeholder='Search...' />
          
          <ApniButton>Search</ApniButton>

          <Box flexGrow={1}/>
          <Typography display={{
             xs: "none",
             lg: "block",
          }}
          color={'rgba(0,0,0,0.7)'}
          textAlign={"center"}
          >
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>

          <Notifications />
        </Stack>
      </Paper>); 

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing='2rem'
      justifyContent="space-between"
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={stats?.usersCount} Icon={<Person />}/>
      <Widget title={"Chats"} value={stats?.totalChatsCount} Icon={<Group />}/>
      <Widget title={"Messages"} value={stats?.messagesCount} Icon={<Message />}/>
    </Stack>  
  ); 

  return (
    <AdminLayout>
      {loading ? (
        <Skeleton height={"100vh"} />
      ) : (
        <Container component={"main"}>{AppBar}

        <Stack 
          direction={{
            xs: "column",
            lg: "row",
          }} 
          flexWrap={"wrap"} 
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          sx={{gap: "2rem"}}
          >
          <Paper elevation={3}
            sx={{
            padding: "2rem 3.5rem",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "40rem",
            }}
          >
            <Typography variant='h4' margin={"2rem 0"}>Last Messages</Typography>
            <LineChart value={stats?.messagesChart || []} />
          </Paper>

          <Paper 
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%"},
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
          }}
          >
            <DoughnutChart 
              labels={["Single Chats", "Group Chats"]} 
              value={[
                stats?.totalChatsCount - stats?.groupsCount || 0,
                stats?.groupsCount || 0,
              ]}/>
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <Group /> <Typography>VS</Typography>
              <Person />

            </Stack>
          
          </Paper>
        </Stack>

        {Widgets}
      </Container>
      )}
      
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => (
  <Paper 
  elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "2rem",
      width: "20rem",
    }}>
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography 
        sx={{
          color: "rgba(0,0,0,0.9)",
          borderRadius: "50%",
          border: `5px solid rgba(280,111,156,0.9)`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >{value}</Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
)

export default DashBoard;