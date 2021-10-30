import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import {
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home(props) {
  const [home, setHome] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/posts/user_posts"),
      axios.get("/api/posts/follow_posts"),
      axios.get("/api/comments"),
    ])
      .then((all) => {
        const userPosts = all[0].data;
        const followingPosts = all[1].data;
        const comments = all[2].data;
        const combinedPosts = userPosts.concat(followingPosts);

        combinedPosts.sort((a, b) => {
          const date1 = new Date(a.created.replace(" ", "T"));
          const unixDate1 = Math.floor(date1.getTime() / 1000);

          const date2 = new Date(b.created.replace(" ", "T"));
          const unixDate2 = Math.floor(date2.getTime() / 1000);

          return unixDate2 - unixDate1;
        });
        setHome(combinedPosts);
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* Delete comments
  passing in the comment ids as params
  use a useEffect onclick = refresh or re-render*/
  const deleteComment = (comment) => {
    if (comment.user_id === props.user.id) {
      console.log("🚀 DELETE_____");
      axios
        .delete(`/api/comments/deleteComment/${comment.id}`)
        .then((res) => {});
    } else {
    }
  };

  // To render all comments of a post
  const existingComments = comments.map((obj) => {
    return (
      <div className="all-comments">
        <div>
          <p>{obj.username}</p>
          <p>{obj.comment}</p>
          <p>{obj.created}</p>
        </div>
        <div>
          {/* <form onSubmit={deleteComment(obj.id)} > */}
          {/* <form> */}
          <button onClick={() => deleteComment(obj)}>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    );
  });

  // To render all posts of users him/herself and those they're following
  const combinedPosts = home.map((post) => {
    return (
      <div key={post.id}>
        <p> {post.username}</p>
        <img src={post.image_video_url} alt="" />
        <p>{post.description}</p>
        <p>{post.created}</p>

        <span>
          <IoHeartOutline className="text-light bg-dark" />
          {post.likes}
        </span>
        {/* <span>
          <IoChatbubbleOutline
            onClick={() => {
              console.log("Clicked for comment! ");
            }}
          />
        </span> */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("clicked fav");
            axios
              .post("/api/favourites/", {
                id: props.user.id,
                post_id: post.id,
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
        <div>
          <p>{existingComments}</p>
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
