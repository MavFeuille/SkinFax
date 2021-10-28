import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import axios from 'axios';
// import {Link} from 'react-router-dom';
import './Direct_messages.css';
// import Join from '../components/Join';
// const socket = require('socket.io');

export default function DirectMessages({location}) {
  //tracks all msgs
  const [messages, setMessages] = useState([]);
  //tracks every single msg
  const [message, setMessage] = useState('');

  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const socket = io()
  useEffect(() => {
    const {name, room} = queryString.parse(location)
    socket.on('message',(message)=>{
      setMessages([...messages, message]);
    } )
    // axios
    //   .get('/api/direct_messages')
    //   .then((res) => {
    //     setMessages(res.data);
    //     setName(res.data);
    //     setRoom(res.data);
    //     //uses error from server file
    //     socket.emit('Join', {name, room}, ()=>{
    //       // where an error msg can go
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.messages);
    //   });
      return ()=> {
        // emit a disconect even  
        // socket.emit('');
        socket.off();
      }
  }, [location]);

  //funct for sending msgs that runs only when messages changes
  // useEffect(() => {
  // socket.on('message',(message)=>{
  //   setMessages([...messages, message]);
  // } )
  // }, [messages]);

  const userMessages = Object.keys(message).map((obj) => {
    return <div> {obj.messages}  {obj.name}  {obj.room}</div>;
  });

  const sendMessage = (event) => { 
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message,()=> setMessage(''));

    }
  }

  console.log('location test___',message, messages, location);
  return (
    <div className="outerContainer">
       <div className="container">
      <h1>Slidding Into the DMs</h1>
        <input 
        value={userMessages}
        onChange={(event) => setMessage(event.target.value)}
        //actually send msgs
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        // type="text" 
        />
        {userMessages}
      </div>
    </div>
  );
}
