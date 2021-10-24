import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {

  // const [name, setName] = useState('');
  // const [age, setAge] = useState();
  const [value, setValue] = useState([])

  const onClick = function () {
    axios.get("/api/test")
      .then((res) => {
        // setName(res.data.name)
        // setAge(res.data.age)
        setValue(res.data)
        console.log(res.data)
      })
  }

  // const clear = function () {
  //   setAge('')
  //   setName('')
  // }

  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
      <div>
        {/* {value} */}
      </div>
    </div>
  );
}

export default App;
