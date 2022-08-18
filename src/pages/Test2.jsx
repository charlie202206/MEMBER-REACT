import React from "react";
import { useState } from 'react'

function Test2(props) {


  const [myCar, setMyCar] = useState(props.lbg);

  const handleChange = (event) => {
    console.log(event.target.value);
    setMyCar(event.target.value)
  }


  return (
    <form>
      <select value={myCar} onChange={handleChange}>
      <option value="customer">customer</option>
      <option value="company">company</option>
      <option value="delivery">delivery</option>
      </select>
    </form>
  )
}


export default Test2;

