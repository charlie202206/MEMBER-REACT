
import './App.css'
import NewMember from './pages/NewMember'
import NewMemberList from './pages/NewMemberList'
// import Login from './pages/login'
import { ContextProvider } from "./ContextAPI";
import React from 'react'

import Login from './pages/login'

function App() {
  return (
    <div className="App">
      <Login/>
          {/* <NewMemberList></NewMemberList> */}
     </div>
  )
}

export default App
