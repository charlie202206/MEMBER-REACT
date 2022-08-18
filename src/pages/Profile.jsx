import React ,{useContext}from "react";
function Profile(){
  const context = useContext(userContext);
  console.log(context);
  return(
    <div>
      <h2>Profile</h2>
    </div>
  );
}

export default Profile;
