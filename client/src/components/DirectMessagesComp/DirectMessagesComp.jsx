import React, {useState, useEffect, useRef} from 'react';
import {useLocation} from  'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import './DirectMessagesComp.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import {socket} from '../../socket';

export default function DirectMessages(props) {
  //stores the immutable val of socket to be used elsewhere ex. state w/o re-render
  const soc = useRef(null);
  //tracks all msgs
  const [messages, setMessages] = useState([]);
  //tracks every single msg
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  // const [showEmojis, setShowEmijis] = useState();
  // const [cursorPosition, setCursorPosition] = useState();

  let location = useLocation();

  
  useEffect(() => {
    // const socket = io()
    soc.current = socket;
    const {name, room} = location.state;
    socket.on('message',(message)=>{
      console.log('msg======', message)
      setMessages(messages =>[...messages, message]);
    } )
    socket.emit('Join', {name, room}, ()=>{
      // where an error msg can go
    });
    return ()=> {
      socket.off();
      }
    }, [location]);
    
    //funct for sending msgs that runs only when messages changes
    const sendMessage = (event) => { 
      event.preventDefault();
      
      if (message) {
        soc.current.emit('sendMessage', message,()=> setMessage(''));
        
      }
    }
    
    // const pickEmoji = (e, {emoji}) => {
    //   const ref = inputRef.current;
    //   ref.focus();
    //   const start = message.substring(0, ref.selectionStart);
    //   const end = message.substring(0, ref.selectionStart);
    //   const text = start + emoji + end;
    //   setMessage(text);
    //   setCursorPosition(start.length+emoji.length);
    // }
    
    // const handleChange =e => {

    // }


    return (
      <div className="outerContainer">
  <div className="sky">
    <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div>
    <div className="shooting-stars"></div>
  </div>

       <div className="container">
      <InfoBar className="header" room={room}/>
     <Messages messages={messages} name={name}/>
        <Input
       message={message} setMessage={setMessage} sendMessage={sendMessage} 
       />
       {/* <div onclick={handleShowEmojis}/>emoji */}
     </div>
    </div>
  );
}


