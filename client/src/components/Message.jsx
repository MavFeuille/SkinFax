import React from 'react';
import './Message.css';

//msg is an obj w/ user+text
export default function Message({message:{user, text}, name}) {

  //using prop of messages from DMComp loops thru msgs
  let isSEntByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if(user === trimmedName){
    isSEntByCurrentUser = true;

  }

  return (
    isSEntByCurrentUser? 
    (
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{text}</p>
        </div>
      </div>
    ):
    (
    <div className="messageContainer justifyStart">
    <div className="messageBox backgroungLight">
      <p className="messageText colorDark">{text}</p>
    </div>
    <p className="sentText pl-10">{user}</p>

  </div>
  )

  )
}