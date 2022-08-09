import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import NewMemberList from "./NewMemberList";
import {useLocation} from "react-router"
import Select from 'react-select'
function SaveMember() {

  const location = useLocation();
  const props = location.state.value;

  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [salesType, setSalesType] = useState("delivery");
  const [zipCode, setZipCode] = useState(props.zipCode);
  const [address, setAddress] = useState(props.address);
  const [addressDetail, setAddressDetail] = useState(props.addressDetail);
  const [hstate,setHstate]=useState("INIT");
  if(props.id != "" && hstate == "INIT"){
    setHstate("AFTER");
    search(props.id);
  }

  const [selectedST, setSelectedST] = useState(salesType);
  const [mode, setMode] = useState('INIT');

  const { id } = useParams();
  // const [params, setParams] = useState({ name: '', email: '', phoneNumber: '' });
  // const OPTIONS = [
  //   {  value: "customer", name: "개인회원" },
  //   {  value: "company", name: "기업회원" },
  //   {  value: "delivery", name: "배달원" }
  // ];
  const handleChange11 = (event) => {
    setSalesType(event.target.value)
  }
  // const SelectBox = (props1) => {
  //   const handleChange=(e)=>{
  //     console.log(e.target.value);
  //     setSelectedST(e.target.value);
  //     setSalesType(e.target.value);
  //   }
  //   return (
  //     <select onChange={handleChange}>
  //         {props1.options.map((option) => (

  //           <option
  //           value={option.value}
  //           key={option.value}
  //             defaultValue={props1.defaultValue === option.value}
  //             // defaultValue={salesType}
  //           >
  //             {option.name}
  //           </option>
  //         ))}
  //       </select>
  //   );
  // };

  function search(e){

   console.log(e);
    axios
      .get(import.meta.env.VITE_API_SERVER + '/member/memberId/'+e)
      .then((res) => {
          console.log("======start============> " );
          console.log( res.data);
          console.log("======end============> " );
          setName(res.data.name);
          setPhoneNumber(res.data.phoneNumber);
          setZipCode(res.data.zipCode);
          setAddress(res.data.address);
          setAddressDetail(res.data.addressDetail);
          setEmail(res.data.email);
          debugger;
          setSalesType(res.data.salesType);

      });
  }


  function handleChange(e) {

     const params = {
      id: props.id,
      name: e.target.membrename.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      salesType: salesType,
      zipCode: e.target.zipCode.value,
      address: e.target.address.value,
      addressDetail: e.target.addressDetail.value
    };
    axios
      .put(import.meta.env.VITE_API_SERVER + '/member/memberId/'+props.id, params)
      .then((res) => {
         // console.log(res.data);
        if (res.status == "200") {
          alert("정상수정되었습니다.");
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
        회원정보 수정
      </h1>

      <form onSubmit={event => {
        event.preventDefault();
        handleChange(event);
      }} >
        <table>
          <tr>

            <th><h5>회원 이름<span className="red">*</span></h5></th>
            <td><input type="text" name="membrename" id="membrename" value={name}  onChange={event=>{
                setName(event.target.value); }} maxLength="40" tabIndex="1"
            /></td>
          </tr>
          <th><h5>회원 이메일<span >*</span></h5></th>
          <td>
            <input type="text" name="email" id="email" value={email} onChange={event=>{
                alert("이메일은 변경할수 없습니다"); }}maxLength="40" tabIndex="2" />
          </td>
          <tr>
            <th><h5>연락처<span >*</span></h5></th>
            <td>
              <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={event=>{
                setPhoneNumber(event.target.value); }}maxLength="13" tabIndex="3" />
            </td>
          </tr>
          <tr>
            <th><h5>회원유형<span >*</span></h5></th>
            <td>

              <select value={salesType} onChange={handleChange11}>
                <option value="customer">customer</option>
                <option value="company">company</option>
                <option value="delivery">delivery</option>
              </select>
            </td>
          </tr>
          <tr>
            <th><h5>Zipcode<span >*</span></h5></th>
            <td>
              <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={event=>{
                setZipCode(event.target.value); }} maxLength="5" tabIndex="5" />
            </td>
          </tr>
          <tr>
            <th><h5>주소<span >*</span></h5></th>
            <td>
              <input type="text" name="address" id="address" value={address} onChange={event=>{
                setAddress(event.target.value); }} maxLength="40" tabIndex="6" />
            </td>
          </tr>
          <tr>
            <th><h5>주소상세<span >*</span></h5></th>
            <td>
              <input type="text" name="addressDetail" id="addressDetail" value={addressDetail} onChange={event=>{
                setAddressDetail(event.target.value); }} maxLength="60" tabIndex="7" />
            </td>
          </tr>
          <br></br>
          <tr>
            <input type="submit" value="수정"></input>
          </tr>
        </table>
      </form>

    </div>
  );
}
export default SaveMember;
