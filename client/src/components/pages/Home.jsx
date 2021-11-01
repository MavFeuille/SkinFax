import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm";
import PostList from "../Posts/PostList";
import './Home.css';

export default function Home(props) {
  const [posts, setPosts] = useState([]);
 
  // const [heart, set]
  useEffect(() => {
    Promise.all([
      axios.get("/api/posts/user_posts"),
      axios.get("/api/posts/follow_posts"),
      // axios.get("/api/comments")
    ])
      .then((all) => {
        const userPosts = all[0].data;
        // console.log("🚀 ~ file: Home.jsx ~ line 25 ~ .then ~ userPosts", userPosts)
        const followingPosts = all[1].data;
        // console.log("🚀 ~ file: Home.jsx ~ line 27 ~ .then ~ followingPosts", followingPosts)
        // const comments = all[2].data;
        const combinedPosts = userPosts.concat(followingPosts);

        combinedPosts.sort((a, b) => {
          const date1 = new Date(a.created.replace(" ", "T"));
          const unixDate1 = Math.floor(date1.getTime() / 1000);

          const date2 = new Date(b.created.replace(" ", "T"));
          const unixDate2 = Math.floor(date2.getTime() / 1000);

          return unixDate2 - unixDate1;
        });
        setPosts(combinedPosts);
        // setComments(comments);
      })
      .catch((err) => {
        console.log(err);
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
        {posts && <PostList posts={posts} user={props.user} deletePost={deletePost} addFavourite={addFavourite}/>}
      </div>
    </section>
  );
}
