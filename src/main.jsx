import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NewMember from './pages/newMember';
import NewMemberList from './pages/NewMemberList';
import SaveMember from './pages/SaveMember';
import Test2 from './pages/Test2';
import Test from './pages/Test';
// import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route element={<App/>} path="/" exact  />
      {/* <Route element={<Login/>} path="/Login"  /> */}
      <Route element={<NewMember/>} path="/NewMember"   />
      <Route element={<NewMemberList/>} path="/NewMemberList"  />
      <Route element={<SaveMember/>} path="/SaveMember"  />
      <Route element={<Test2 lbg="Volvo"/>} path="/Test2"/>
      <Route element={<Test/>} path="/Test"/>
    </Routes>
    </BrowserRouter>
  // </React.StrictMode>
)
