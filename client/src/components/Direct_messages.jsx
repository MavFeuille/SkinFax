import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Direct_messages.css';
import Join from '../components/Join';

export default function DirectMessages () {
  const [message, setMessage] = useState ([]);
  // const [name, setName] = useState ('');
  // const [room, setRoom] = useState ('');

  useEffect (() => {
    axios
      .get ('/api/direct_messages')
      .then (res => {
        setMessage (res.data);
      })
      .catch (err => {
        console.log (err.message);
      });
  }, []);

  const userMessages = message.map (obj => {
    return <div> {obj.message}</div>;
  });

  return (
    <div>
      <h1>Slidding Into the DMs</h1>
      {userMessages}
     
    </div>
  );

  /* <Link 
//prevent press of button w/o a name and room chosen
onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/direct_messages?name=${name}&room=${room}`}>
<button
  className="button mt-20" type="submit">Sign In
  </button>
</Link> */
}

//import DirectMessages into a hook to render info in api/dms port 3000
//{DirectMessages} in return div

 /* <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading"> Join</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              //when user types something triggers event
              onChange={event => setName (event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput"
              type="text"
              onChange={event => setRoom (event.target.value)}
            />
          <a
          onClick={event => (!name || !room ? event.preventDefault () : null)}
          to={`/direct_messages?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
          </a>
          </div>
        </div> */
        
         
        
      /* </div> */
