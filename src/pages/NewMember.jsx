import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewMemberList from "./NewMemberList";

function NewMember(props) {
  // const [mode, setMode] = useState('READ');
  const { id } = useParams();
  const [params, setParams] = useState({ name: '', email: '', phoneNumber: '' });
  const OPTIONS = [
    {  value: "customer", name: "개인회원" },
    {  value: "company", name: "기업회원" },
    {  value: "delivery", name: "배달원" }
  ];
  debugger;
  const SelectBox = (props) => {
    const handleChange=(e)=>{
      console.log(e.target.value);
      setSelectedST(e.target.value);
    }
    return (
      <select onChange={handleChange}>
          {props.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={props.defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
    );
  };
  const [selectedST, setSelectedST] = useState("customer");
  const [mode, setMode] = useState('INIT');
  let contentControl = null;
  // const childRef = useRef();
  // useEffect(() => {
  //   axios.get(import.meta.env.VITE_API_SERVER + '/member/' + id).then((res) => {
  //     setParams({ name: res.data.name, email: res.data.email, phoneNumber:res.data.phoneNumber });
  //   });
  // }, [params.firstName, params.lastName]);

  if (mode === "INIT") {
    contentControl = <></>;
  } else if (mode === "UPDATE") {
    contentControl = <NewMemberList _mode="UPDATE" ></NewMemberList>;
  } else {
    contentControl = <NewMemberList _mode="READ" ></NewMemberList>;
  }


  function handleChange(e) {

     const params = {
      name: e.target.membrename.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      salesType: selectedST,
      zipCode: e.target.zipCode.value,
      address: e.target.address.value,
      addressDetail: e.target.addressDetail.value
    };
    axios
      .post(import.meta.env.VITE_API_SERVER + '/member/members', params)
      .then((res) => {
        debugger;
        // console.log(res.data);
        if (res.status == "201") {
          alert("정상등록되었습니다.");
          setMode("UPDATE");
        } else {
          alert("등록되지 않았습니다.");
        }
        // console.log(import.meta.env.VITE_API_SERVER + '/member/members');
      });
  }

  return (
    <div >
      <h1>
        회원가입
      </h1>

      <form onSubmit={event => {
        event.preventDefault();
        handleChange(event);
        // alert("이름:" + event.target.membrename.value  +
        //       "이메일" + event.target.email.value );
      }} >
        <table>
          <tr>

            <th><h5>회원 이름<span className="red">*</span></h5></th>
            <td><input type="text" name="membrename" id="membrename" placeholder="이름" maxLength="40" tabIndex="1"
            /></td>
          </tr>
          <th><h5>회원 이메일<span >*</span></h5></th>
          <td>
            <input type="text" name="email" id="email" placeholder="이메일" maxLength="40" tabIndex="2" />
          </td>
          <tr>
            <th><h5>연락처<span >*</span></h5></th>
            <td>
              <input type="text" name="phoneNumber" id="phoneNumber" placeholder="연락처" maxLength="13" tabIndex="3" />
            </td>
          </tr>
          <tr>
            <th><h5>회원유형<span >*</span></h5></th>
            <td>
              <SelectBox  id="salesType" options={OPTIONS} defaultValue="company" />
            </td>
          </tr>
          <tr>
            <th><h5>Zipcode<span >*</span></h5></th>
            <td>
              <input type="text" name="zipCode" id="zipCode" placeholder="우편번호" maxLength="5" tabIndex="5" />
            </td>
          </tr>
          <tr>
            <th><h5>주소<span >*</span></h5></th>
            <td>
              <input type="text" name="address" id="address" placeholder="주소" maxLength="40" tabIndex="6" />
            </td>
          </tr>
          <tr>
            <th><h5>주소상세<span >*</span></h5></th>
            <td>
              <input type="text" name="addressDetail" id="addressDetail" placeholder="상세주소" maxLength="60" tabIndex="7" />
            </td>
          </tr>
          <br></br>
          <tr>
            <input type="submit" value="가입"></input>
          </tr>
        </table>
      </form>
      {contentControl}

    </div>
  );
}
export default NewMember;
