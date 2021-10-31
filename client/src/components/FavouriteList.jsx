import axios from "axios";
import { useState, useEffect } from "react";
import FavouriteListItem from "./FavouriteListItem";

export default function Favourites(props) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/favourites/${props.user.id}`)
      .then((res) => {
        setFavourites(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deleteFavourite = function (id) {
    console.log("delete favourite", id);
    axios
      .delete(`/api/favourites/${id}`)
      .then(() => {
        setFavourites(favourites.filter((fav) => fav.id !== id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const userFavourites = favourites.map((favourite) => {
    return (
      <FavouriteListItem
        key={favourite.id}
        created={favourite.created}
        username={favourite.username}
        url={favourite.image_video_url}
        description={favourite.description}
        deleteFavourite={() => deleteFavourite(favourite.id)}
      />
    );
  });

  return <div>{userFavourites}</div>;
}
