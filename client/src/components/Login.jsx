import { useEffect, useState } from "react";
import axios from 'axios';


export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', {username: user.username, password: user.password})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return(
    <div>
       
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={(event) => setUser(event.target.value)} 
            className="form-input" />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(event) => (setUser(event.target.value))}
            className="form-input"/>
       
        <button className='btn' type="submit">Submit</button>
        </form>
      </div>
  );
}