import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import {
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoBookmarkOutline,
  IoRocketSharp,
} from "react-icons/io5";
import { Form, FloatingLabel } from "react-bootstrap";

export default function Home(props) {
  const [home, setHome] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/posts/user_posts"),
      axios.get("/api/posts/follow_posts"),
    ])
      .then((all) => {
        const userPosts = all[0].data;
        const followingPosts = all[1].data;
        const combinedPosts = userPosts.concat(followingPosts);

        combinedPosts.sort((a, b) => {
          const date1 = new Date(a.created.replace(" ", "T"));
          const unixDate1 = Math.floor(date1.getTime() / 1000);

          const date2 = new Date(b.created.replace(" ", "T"));
          const unixDate2 = Math.floor(date2.getTime() / 1000);

          return unixDate2 - unixDate1;
        });
        setHome(combinedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const combinedPosts = home.map((obj) => {
    return (
      <div key={obj.id}>
        <p>{obj.username}</p>
        <img src={obj.image_video_url} />
        <p>{obj.description}</p>
        <p>{obj.created}</p>
        <span onClick={() => console.log("Liked! ")}>
          <IoHeartOutline />
        </span>
        <span
          onClick={() => {
            console.log("Clicked for comment! ");
          }}
        >
          <IoChatbubbleOutline />
        </span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("clicked fav");
            axios
              .post("/api/favourites/", {
                id: props.user.id,
                post_id: obj.id,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }}
        >
          <button type="submit">
            <IoBookmarkOutline />
          </button>
        </form>
        <div>
          <CommentForm />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="title">Home</h1>
      {combinedPosts}
    </div>
  );
}
