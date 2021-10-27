import React, { useState, useEffect} from "react";
import axios from 'axios';

export default function DirectMessages() {
const [message, setMessage] = useState([]);

useEffect(()=>{ 
  axios.get("/api/direct_messages")
.then ((res) => {
 setMessage(res.data);
}).catch ((err) => {
  console.log(err.message)
})
},[]);

const userMessages = message.map((obj)=>{
return (
<div> {obj.message}</div>
)
})

return (
  <div>
    <h1>Slidding Into the DMs</h1>
    {userMessages}
    
  </div>
)

  }

//import DirectMessages into a hook to render info in api/dms port 3000
//{DirectMessages} in return div