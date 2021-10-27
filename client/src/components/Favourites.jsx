import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Favourites() {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get('/api/favourites')
    .then((res) => {
      setFavourites(res.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])

  const userFavourites = favourites.map((obj) => {
    return (
      <>
        <div>
        <span>
          {obj.username}
        </span>
        <br/>
        <span>
          {obj.created}
        </span>
        </div>
        <div>
        <img src={obj.image_video_url} alt="" />
        <p>{obj.description}</p>
        </div>
      </>
    );
  })

  return(
    <div>
      {userFavourites}
    </div>
  );
}