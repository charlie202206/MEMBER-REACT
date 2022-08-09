import React from "react";
import { useState } from 'react'

function Test2(props) {


  const [myCar, setMyCar] = useState(props.lbg);

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }


  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}


export default Test2;

