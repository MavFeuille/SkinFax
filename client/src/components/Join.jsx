//useState= a hook
import React, {useState} from "react";
//links to /dms path
import {Link} from "react-router-dom";
import './Join.css';

export default function Join(){
const [name, setName] = useState('');
const [room, setRoom] = useState('');

  return (
    // <div className="joinOuterContainer">
    // <div className="joinInnerContainer">
    //   <h1 className="heading"> Join</h1>
    //     <div><input placeholder="Name" className="joinInput" type="text" 
    //     //when user types something triggers event
    //     onChange={(event)=>setName(event.target.value)}/></div>

    //     <div><input placeholder="Room" className="joinInput" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
        
        <Link 
        //prevent press of button w/o a name and room chosen
        onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/direct_messages?name=${name}&room=${room}`}>
        <button
          className="button mt-20" type="submit">Sign In
          </button>
        </Link>
    // </div>
    
    // </div>

  )
}

