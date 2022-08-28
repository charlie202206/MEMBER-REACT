
import './App.css'
import { useState, createContext } from 'react';
// import NewMember from './pages/NewMember'
// import NewMemberList from './pages/NewMemberList'
// import Login from './pages/login'
// import { ContextProvider } from "./ContextAPI";
import React from 'react'

import Login from './pages/login'
// const userContext = createContext();

function App() {

  // const userInfo = {memberId : 0, memberName : "a", memberEmail : "b", memberSalesType : "c"};
  return (
    // <ContextProvider value={userInfo}>
    <div className="App">
      <Login/>
          {/* <NewMemberList></NewMemberList> */}
     </div>
    //  </ContextProvider>
  )
}

export default App
