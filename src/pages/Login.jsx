import React, { useState , useContext} from "react";
import ContextAPI from "../ContextAPI";
//import { createContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

  const context = useContext(ContextAPI);


  // const [user1,setUser1] = useState([]);
  const navigate = useNavigate();
  function userLogin(e) {

    const params = {
      email: e.target.staticEmail.value,
      encryptedPwd : e.target.inputPassword.value
    };
debugger;
    console.log(params);
    console.log("================>" + context);
    axios
      .post(import.meta.env.VITE_API_SERVER + '/member/login/', params)
      .then((res) => {
        console.log("======start============> ");
        console.log(res.data);
        console.log("======end============> ");
        // let userInfo = [];
debugger;
        if (res.status == "200" || res.status == "201") {
          const userInfo = {memberId:res.data.id,
            memberName:res.data.name,
            memberEmail:res.data.email,
            memberPhoneNumber:res.data.phoneNumber,
            memberSalesType:res.data.salesType};

          context.memberId = userInfo.memberId;
          context.memberName = userInfo.memberName;
          context.memberEmail = userInfo.memberEmail;
          context.memberPhoneNumber = userInfo.memberPhoneNumber;
          context.memberSalesType = userInfo.memberSalesType;

          console.log("=============aaaa===>" + context);
          console.log("=============bbbb===>" + userInfo);
          userInfo.id = res.data.id;
          userInfo.name =
          navigate('/SaveMember', {state:{value: userInfo}})

        } else if (res.status == "203") {
          alert("아이디와 패스워드를 확인하세요");
          navigate('/',{state:{value:""}})
        } else {
          alert("시스템 오류입니다:" + res.status);
          navigate('/',{state:{value:""}})
        }

      }).catch(err => {alert("아이디와 패스워드를 확인하세요..")});
  }

  function moveNewMember()
  {
    navigate('/newMember',{state:{value:""}})
  }
  return (
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

  );

}

export default Login;
