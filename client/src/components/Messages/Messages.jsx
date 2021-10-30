import React from 'react';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
// import DirectMessages from './Direct_messages';

export default function Messages({messages, name}) {

  //using prop of messages from DMComp loops thru msgs
  return (
<ScrollToBottom>
    {messages.map((message, i)=> 
    <div key={i}>
      <Message message={message} name={name}/>
    </div>)}
</ScrollToBottom>

  )
}