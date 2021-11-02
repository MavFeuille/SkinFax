import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm";
import PostList from "../Posts/PostList";
import './Home.css';

export default function Explore(props) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
    
    const addFavourite = (id) => {
      // event.preventDefault();
      console.log("clicked fav");
      axios
        .post("/api/favourites/", {
          id: props.user.id,
          post_id: id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  
    const deletePost = function (id) {
      console.log("deleting post, post ID: ", id);
      axios
        .delete(`/api/posts/${id}`)
        .then(() => {
          setPosts(posts.filter((post) => post.id !== id));
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

  // To render all posts of users him/herself and those they're following
  return (
    <section className="mainContainer">
      <div>
        <h1 className="title">Home</h1>
        {posts.length && <PostList posts={posts} user={props.user} deletePost={deletePost} addFavourite={addFavourite} showFollow={true}/>}
      </div>
    </section>
  );
}
