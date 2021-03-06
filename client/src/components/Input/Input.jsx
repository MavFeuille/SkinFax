import React from 'react';
import './Input.css';

//change to pass in props later*
export default function Input({message, setMessage, sendMessage}){

  return (
    <form className="form-dms">
      <input 
      className="input"
      type="text"
      placeholder="Type a message"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      //actually send msgs
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
       />
       <button className="sendButton" onClick={(event)=> sendMessage(event)}>Send</button>
    </form>
  )
}