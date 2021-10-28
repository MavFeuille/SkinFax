import React, {useState, useEffect} from 'react';
import {useLocation} from  'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import axios from 'axios';
// import {Link} from 'react-router-dom';
import './Direct_messages.css';
// import Join from '../components/Join';
// const socket = require('socket.io');

export default function DirectMessages(props) {
  //tracks all msgs
  const [messages, setMessages] = useState([]);
  //tracks every single msg
  const [message, setMessage] = useState('');
  // const [room, setRoom] = useState('');
  // const [name, setName] = useState('');
  let location = useLocation();


  const socket = io()
  useEffect(() => {
    const {name, room} = location.state;
    // console.log('name/room...', name, room);
  
    // axios
    //   .get('/api/direct_messages')
    //   .then((res) => {
    //     setMessages(res.data);
    //     setName(res.data);
    //     setRoom(res.data);
    //     //uses error from server file
        socket.emit('Join', {name, room}, ()=>{
          // where an error msg can go
        });
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
  useEffect(() => {
  socket.on('message',(message)=>{
  
    setMessages([...messages, message]);
  } )
  }, [messages]);

  // const userMessages = Object.keys(message).map((obj) => {
  //   return <div> {message}  {name}  {room}</div>;
  // });

  const sendMessage = (event) => { 
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message,()=> setMessage(''));

    }
  }
console.log('message____', message)
  
  return (
    <div className="outerContainer">
       <div className="container">
      <h1>Slidding Into the DMs</h1>
        <input 
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        //actually send msgs
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        // type="text" 
        />
      </div>
    </div>
  );
}

// {userMessages}