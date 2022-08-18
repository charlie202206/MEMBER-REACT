import React ,{useContext} from "react";
import Login from "./login";
function About(){
const context = useContext(userContext);
console.log(context);
  return(
    <div>
      <h2>About</h2>
    </div>
  );
}

export default About;
