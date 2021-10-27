import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import CreatePost from './components/Create_post';

function App() {

  const [value, setValue] = useState([])

  useEffect(() => {
    // using Axios to fetch data from the database
    Promise.all([
      axios.get("/api/profile"),
      axios.get("/api/create_post")
    ]).then ((res) => {
      setValue(res.data)
    }).catch ((err) => {
      console.log(err.message)
    })
    // axios.get("/api/profile")
    //   .then((res) => {
    //     setValue(res.data) // set value
    //   })
    //   .catch((err) => {
    //     console.log(err.message)
    //   })
  }, [])

  // map over array of objects
  // const users = value.map((obj) => {
  //   return (
  //     <div>
  //       <p>
  //         {obj.content}
  //       </p>
  //       <p>
  //         {obj.name}
  //       </p>
  //     </div>
  //   )
  // })

  return (
    <div className="App">
      <div>
        <CreatePost />
        testing
      </div>
    </div>
  );
}

export default App;