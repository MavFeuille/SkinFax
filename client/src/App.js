import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [value, setValue] = useState([])

  useEffect(() => {
    // using Axios to fetch data from the database
    axios.get("/api/test")
      .then((res) => {
        setValue(res.data) // set value
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  // map over array of objects
  const users = value.map((obj) => {
    return (
      <div>
        <p>Hi my name is {obj.name} and my username is
          also {obj.username}. and my email is {obj.email}
        </p>
      </div>
    )
  })

  return (
    <div className="App">
      <div>
        {users}
      </div>
    </div>
  );
}

export default App;
