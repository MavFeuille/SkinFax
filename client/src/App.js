import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [value, setValue] = useState([])

  useEffect(() => {
    // using Axios to fetch data from the database
    axios.get("/api/forum")
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
        <p>
          {obj.content}
        </p>
        <p>
          {obj.name}
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