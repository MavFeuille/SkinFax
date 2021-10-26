import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    // using Axios to fetch data from the database
    axios.get("/api/favourites")
      .then((res) => {
        setFavourites(res.data) // set favourites
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  // map over array of objects
  const usersFavourites = favourites.map((obj) => {
    return (
      <div>
        <p>
          {obj.description}
        </p>
        <p>
          {obj.created}
        </p>
      </div>
    )
  })

  return (
    <div className="App">
      <div>
        {usersFavourites}
      </div>
    </div>
  );
}

export default App;