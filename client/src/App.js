import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const onClick = function () {
    axios.get("/api/test")
      .then((res) => {
        setName(res.data.name)
        setAge(res.data.age)
      })
  }
  const clear = function () {
    setAge('')
    setName('')
  }

  return (
    <div className="App">
      <button onClick={onClick}>api</button>
      <button onClick={clear}>clear</button>
      <div>
        {name}
      </div>
      <div>
        {age}
      </div>
    </div>
  );
}

export default App;
