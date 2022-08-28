import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useState, createContext } from 'react';
import { ContextProvider } from "./ContextAPI";
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NewMember from './pages/newMember';
import NewMemberList from './pages/NewMemberList';
import SaveMember from './pages/SaveMember';
// import Login from './pages/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
const userContext = createContext();
const userInfo = {memberId : 0, memberName : "a", memberEmail : "b", memberPhoneNumber: "d", memberSalesType : "c"};
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<ContextProvider value={userInfo}>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>} path="/" exact  />
      {/* <Route element={<Login/>} path="/Login"  /> */}
      <Route element={<NewMember/>} path="/NewMember"   />
      <Route element={<NewMemberList/>} path="/NewMemberList"  />
      <Route element={<SaveMember/>} path="/SaveMember"  />
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  // </React.StrictMode>
)
