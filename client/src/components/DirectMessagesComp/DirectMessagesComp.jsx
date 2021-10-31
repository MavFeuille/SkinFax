import React, {useState, useEffect, useRef} from 'react';
import {useLocation} from  'react-router-dom';
import queryString from 'query-string';
// import io from 'socket.io-client';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import './DirectMessagesComp.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import {socket} from '../../socket';

// let socket;

export default function DirectMessages(props) {
  //stores the immutable val of socket to be used elsewhere ex. state w/o re-render
  const soc = useRef(null);
  //tracks all msgs
  const [messages, setMessages] = useState([]);
  //tracks every single msg
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  let location = useLocation();


  useEffect(() => {
    // const socket = io()
    soc.current = socket;
    const {name, room} = location.state;
    socket.on('message',(message)=>{
      console.log('msg======', message)
      setMessages(messages =>[...messages, message]);
    } )
    // axios
    //   .get('/api/direct_messages')
    //   .then((res) => {
        // setMessages(res.data);
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
  // useEffect(() => {
  // // socket.on('message',(message)=>{
  // //   setMessages([...messages, message]);
  // // } )
  // }, [messages]);

  // const userMessages = Object.keys(message).map((obj) => {
  //   return <div> {message}  {name}  {room}</div>;
  // });

  const sendMessage = (event) => { 
    event.preventDefault();

    if (message) {
      soc.current.emit('sendMessage', message,()=> setMessage(''));

    }
  }
console.log('message____', )

  return (
    <div className="outerContainer">
   
   {/* <div class="container"> */}
    {/* <div class="text"></div> */}
  <div className="sky">
    <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div>
    <div className="shooting-stars"></div>
  </div>
{/* </div> */}

       <div className="container">
      <InfoBar className="header" room={room}/>
      {/* <h1 className="header">Sliding Into the DMs</h1> */}
     <Messages messages={messages} name={name}/>
        <Input
       message={message} setMessage={setMessage} sendMessage={sendMessage} 
        />
         {/* <button className="sendButton" onClick={(event)=> sendMessage(event)}>Send</button> */}
      </div>
    </div>
  );
}

// {userMessages}

// fix:
// app crashes when click away from msgs dms page
// onkey enter not working when pushed
