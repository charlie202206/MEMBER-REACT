import React, { useState } from "react";
import { ContextProvider } from "../ContextAPI";
//import { createContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

//const UserContext = createContext();

  const user = {
    memberId: 1,
    memberName: "Lee",
    memberEmail: "aaaa",
    memberSalesType: "company"
  };

  const [user1,setUser] = useState([]);
  const navigate = useNavigate();
  function userLogin(e) {

    const params = {
      email: e.target.staticEmail.value,
      passward : e.target.inputPassword.value
    };

    console.log(params);
    axios
      .post(import.meta.env.VITE_API_SERVER + '/member/login/', params)
      .then((res) => {
        console.log("======start============> ");
        console.log(res.data);
        console.log("======end============> ");
        // let userInfo = [];
        const userInfo = {memberId:res.data.id,
          memberName:res.data.name,
          memberEmail:res.data.email,
          memberSalesType:res.data.salesType};
        setUser(userInfo);
        userInfo.id = res.data.id;
        userInfo.name =
        navigate('/SaveMember', {state:{value: userInfo}})
      });
  }

  function moveNewMember()
  {
    navigate('/newMember',{state:{value:""}})
  }
  return (
    <ContextProvider value={user}>
      <div className="container-login"   >
        <h2>로그인</h2>
        <p> </p>
        <p> </p>

        <form className="row g-3" onSubmit={event=>{

              event.preventDefault();
              if(event.target.staticEmail.value === "" || event.target.inputPassword.value === ""){
                alert("이메일/패스워드 정보를 입력하세요.")
              }else{
                userLogin(event);
              }
        }}>
          <div className="mb-3 row"></div>
             <div className="mb-3 row">

            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com"></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
            </div>
          </div>
          <div className="div-box" >
            <button type="submit" className="btn btn-primary"  >로그인</button>
          </div>


        </form>
        <p></p>
        <a href={'/newMember/'} onClick={event=>{
             event.preventDefault();
             moveNewMember();
          }}  style={{float:"right"}} >회원가입</a>

      </div>
    </ContextProvider>
  );

}

export default Login;
