import React from "react";
function Nav(props){

  debugger;
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href = {'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        console.log(event.target.id);
        props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>)
    console.log(t.title);
  }
return(
<nav>
  <ol>
    {lis}
  </ol>
</nav>
)
}
export default Nav;
