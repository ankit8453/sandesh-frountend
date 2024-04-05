import React, { Suspense, lazy, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectRoutes from './components/auth/ProtectRoutes';
import { LayoutLoader } from './components/layout/Loaders';
import axios from "axios";
import { server } from "./constants/config";
import { useDispatch, useSelector } from "react-redux";
import { userExists, userNotExists } from "./redux/reducers/auth";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "./socket";


const Home = lazy(()=> import("./pages/Home"));
const Groups = lazy(()=> import("./pages/Groups"));
const Chat = lazy(()=> import("./pages/Chat"));
const Login = lazy(()=> import("./pages/Login"));
const NotFound = lazy(()=> import("./pages/NotFound"));


const AdminLogin = lazy(()=> import("./pages/Admin/AdminLogin"));
const DashBoard = lazy(()=> import("./pages/Admin/DashBoard"));
const ChatManage = lazy(()=> import("./pages/Admin/ChatManage"));
const MessageManage = lazy(()=> import("./pages/Admin/MessageManage"));
const UserManage = lazy(()=> import("./pages/Admin/UserManage"));




const App = () => {
  const { user, loader } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);

  return loader ? (
    <LayoutLoader />
  ) : (  
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
         <Route element={
           <SocketProvider>
             <ProtectRoutes user={user} />
           </SocketProvider>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/Groups" element={<Groups/>}/>
           <Route path="/chat/:chatId" element={<Chat/>}/>
          </Route>    
         <Route path="/login" element={<ProtectRoutes user={!user} redirect="/">
           <Login />
          </ProtectRoutes>}/>
          
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<DashBoard />} />
          <Route path='/admin/users-management' element={<UserManage />} />
          <Route path='/admin/chats-management' element={<ChatManage />} />
          <Route path='/admin/messages' element={<MessageManage />} />

         <Route path="*" element={<NotFound />}/>
        </Routes>
      </Suspense>

      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;