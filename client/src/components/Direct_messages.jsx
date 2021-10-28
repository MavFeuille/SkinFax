import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import axios from 'axios';
// import {Link} from 'react-router-dom';
import './Direct_messages.css';
// import Join from '../components/Join';
// const socket = require('socket.io');

export default function DirectMessages({location}) {
  const [message, setMessage] = useState([]);
  const [room, setRoom] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    const {name, room} = queryString.parse(location)
    const socket = io()
    axios
      .get('/api/direct_messages')
      .then((res) => {
        setMessage(res.data);
        setName(res.data);
        setRoom(res.data);
        //uses error from server file
        socket.emit('Join', {name, room}, ()=>{
          // where an error msg can go
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
      return ()=> {
        // emit a disconect even  
        // socket.emit('');
        socket.off();
      }
  }, [ location]);

  const userMessages = message.map((obj) => {
    return <div> {obj.message}  {obj.name}  {obj.room}</div>;
  });

  return (
    <div>
      <h1>Slidding Into the DMs</h1>
      {userMessages}
    </div>
  );
}
