import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectRoutes from './components/auth/ProtectRoutes';
import { LayoutLoder } from './components/layout/Loders';
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


let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoder/>}>
        <Routes>
         <Route element={<ProtectRoutes user={user} />}>
           <Route path="/" element={<Home/>}/>
           <Route path="/Groups" element={<Groups/>}/>
           <Route path="/chat/:chatId" element={<Chat/>}/>
          </Route>    
         <Route path="/login" element={<ProtectRoutes user={!user}>
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
    </BrowserRouter>
  )
}

export default App