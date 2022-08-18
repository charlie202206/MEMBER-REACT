import React, { useState, useEffect, useMemo, useContext} from "react";
import axios from 'axios';
import Table from '../components/Table';
import {Button} from '../components/index';
import { useNavigate } from "react-router-dom";
import ContextAPI from "../ContextAPI";

function NewMemberList(props){

  const { memberId, memberName, memberEmail, memberSalesType } = useContext(ContextAPI);
  console.log("props called inside of a function", memberId, memberName, memberEmail, memberSalesType);

   const [data, setData] = useState([]);
   const [mode,setMode]=useState(props._mode);

   let contentControl1 = null;
   const navigate = useNavigate();

   const columns = useMemo(
    () => [
      {
        accessor: "id",
        Header: "ID"
      },
      {
        accessor: "name",
        Header: "성명"
      },
      {
        accessor: "email",
        Header: "이메일"
      },
      {
        accessor: "phoneNumber",
        Header: "전화번호"
      },
      {
        accessor: "_links.self.href",
        Header: "상태변경",
        Cell: cell => (
          <div>
            <Button className="button" onClick={()=>updateMember(cell.row.values)}>수정</Button>
            <Button className="button" onClick={()=>deleteMember(cell.row.values)}>삭제</Button>
          </div>

        )
      },


    ],
    []
  );
  // debugger;
  if(mode==="UPDATE"){
    // debugger;
    setMode("READ");
    memberList();
  }else if(mode ==="UPDATEROW"){
    setMode("READ");
  }

 function updateMember(value){
  //debugger;
   navigate('/SaveMember', {state:{value: value}})

 };
 function deleteMember(value){
     debugger;
    // alert(value.id);
    // const newMember = [];
    // const tempData = [...data];
    // for(let i=0; i<tempData.length; i++){
    //   if(tempData[i].id != value.id){
    //     newMember.push(data[i]);
    //   }
    // }


    axios
    .delete(import.meta.env.VITE_API_SERVER + '/member/deleteMemberById/'+value.id)
    .then((res) =>
    {

      //  debugger;
      //  alert(res);
       if(res.status == "204"){
         alert("정상 삭제되었습니다");
         setMode("UPDATE");
       }else{
         alert("오류");
       }
    }

    ).catch(console.log("error"))
    ;

 };


 function memberList(e){

  // debugger;
  axios
      .get(import.meta.env.VITE_API_SERVER + '/member/members')
      .then((res) => {
        // setName(res);
        console.log(res);
        debugger;
        setData(res.data.content);
        console.log(data);

              // debugger;
      });
  }

  return(
    <div >
      <h1>
        회원리스트
      </h1>
      <form  onSubmit={event=>{
        event.preventDefault();
       memberList(event);
      }} >
        <tr> <input type="submit" value= "전체조회"></input></tr>
        <Table columns={columns} data={data || data} />
      </form>
      <div>
        {contentControl1}
      </div>
    </div>
  );

}
export default NewMemberList;
