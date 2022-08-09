import React from "react";
import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import Create from './Create'
import Update from './Update'
import { useState } from 'react'

function Test(){
 // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode]=useState('WELCOME');
  const [id, setId]=useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ])
  let content = null;
  let contentControl = null;
  if(mode==="WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode ==="READ"){
    console.log(mode);
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contentControl = <><li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode("UPDATE");
    }}>Update</a></li>
    <li><input type="button" value ="Delete" onClick={()=>{
      const newTopics = [];
      for(let i=0; i<topics.length; i++){
        if(topics[i].id != id){
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}></input>
    </li>
    </>;
  }else if(mode === "CREATE"){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics =[...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      console.log("test", _title, _body);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }else if(mode === "UPDATE"){
      let title, body = null;
      for(let i=0; i<topics.length; i++){
        if(topics[i].id === id){
          title = topics[i].title;
          body = topics[i].body;
        }
      }
      content = <Update title={title} body={body} onUpdate={(_title, _body)=>{
      const newTopics = [...topics];
      const updateTopic = {id:id, title:_title, body:_body};
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
            newTopics[i]=updateTopic;
            break;
          }
        }
      setTopics(newTopics);
      console.log("test", _title, _body);
      setMode('READ');
    }}></Update>
  }
  return (

    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
         setMode("READ");
         console.log(_id);
         setId(_id);
      }}></Nav>
      {content}
      <li><a href='/create' onClick={event=>{
        event.preventDefault();
        setMode("CREATE");
      }
      } >Create</a></li>
      {contentControl}
      {/* <NewMemberList></NewMemberList> */}

    </div>
  )
}

export default Test;
