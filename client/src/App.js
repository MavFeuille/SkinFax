import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [value, setValue] = useState()

  useEffect(() => {
    const test = function () {
      return axios.get("/api/test")
        .then((res) => {
          setValue(res.data)
        })
        .then(() => {
          const users = value.map((obj) => {
            return (
              <div>
                <p>Hi my name is {obj.name} and my username is
                  also {obj.username}. and my email is {obj.email}
                </p>
              </div>
            )
          })
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [])

  return (
    <div className="App">
      <div>
        { }
      </div>
    </div>
  );
}

export default App;
