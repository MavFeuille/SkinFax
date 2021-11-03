import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../Posts/PostList";
import "./Home.css";

export default function Explore(props) {
// console.log("🚀 ~ file: Explore.jsx ~ line 8 ~ Explore ~ props", props)
  const [posts, setPosts] = useState([]);
  const [followList, setFollowList] = useState([]);
  
  
  useEffect(() => {
    axios
    .get(`/api/posts`)
    .then((res) => {
      console.log("🚀 ~ file: Explore.jsx ~ line 15 ~ .then ~ res", res)
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);
  
  // Get the list of friends that the user is following
  useEffect(() => {
    axios.get(`/api/follow/${props.user.id}`)
    .then((res) => {
      console.log("🚀 ~ file: Explore.jsx ~ line 29 ~ .then ~ res", res);
      setFollowList(res.data);
      console.log("🚀 ~ file: Explore.jsx ~ line 31 ~ .then ~ res.data", res.data)
    })
    .catch((err) => {
      console.log("🚀 ~ file: Explore.jsx ~ line 34 ~ findExistingFollowing ~ err", err);
    })
  },[]);
  ////
  
  console.log("🚀 ~ file: Explore.jsx ~ line 38 ~ Explore ~ posts", posts)

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
  
 
  
  // Follow new friend
  // const handleFollow = () => {
  //   console.log("🚀 ~ file: Explore.jsx ~ line 70 ~ Explore ~ user.id", props.user.id)
   
  //   axios.post(`/api/follow/${posts.user_id}`, {userID: props.user.id})
  //   .then((res) => {
  //     console.log("🚀 ~ file: Explore.jsx ~ line 57 ~ .then ~ res", res)
      
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }

  // To render all posts of users him/herself and those they're following
  return (
    <section className="mainContainer">
      <div>
        <h1 className="title">Explore</h1>
        {posts.length && <PostList posts={posts} user={props.user} deletePost={deletePost} addFavourite={addFavourite} followList={followList} />}
      </div>
    </section>
  );
}
