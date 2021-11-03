import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../Posts/PostList";
import "./Explore.css";

export default function Explore(props) {
  // console.log("🚀 ~ file: Explore.jsx ~ line 8 ~ Explore ~ props", props)
  const [posts, setPosts] = useState([]);
  const [followList, setFollowList] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/posts`),
      axios.get(`/api/follow/${props.user.id}`)
    ]).then((res) => {
        console.log("🚀 ~ file: Explore.jsx ~ line 15 ~ .then ~ res", res);
        setPosts(res[0].data);
        // console.log("🚀 ~ file: Explore.jsx ~ line 29 ~ .then ~ res", res);
        setFollowList(res[1].data);
        console.log(
          "🚀 ~ file: Explore.jsx ~ line 31 ~ .then ~ FollowList",
          res[1].data
        );
    }).catch((err) => {
      console.log(err.message);
    });
  }, [props.user.id])



  console.log("🚀 ~ file: Explore.jsx ~ line 38 ~ Explore ~ posts", posts);

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
  };

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

  const addFollower = function (followingId, userID) {
  
    axios
      .post(`/api/follow/${followingId}`, { userID: userID })
      .then((res) => {
        console.log("🚀 ~ file: Explore.jsx ~ line 37 ~ .then ~ res", res);
        setFollowList([...followList, followingId])
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  const removeFollower = function (followingId, userID) {
    axios
      .delete(`/api/follow/${followingId}`, { data: { userID: userID}})
      .then((res) => {
        console.log("🚀 ~ file: Explore.jsx ~ line 65 ~ .then ~ res", res);
        setFollowList(followList.filter((following) => following !== followingId))
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // To render all posts of users him/herself and those they're following
  return (
    <section className="mainContainer">
      <div>
        <h1 id="title">Explore</h1>
        {posts.length > 0 && (
          <PostList
            posts={posts}
            user={props.user}
            deletePost={deletePost}
            addFavourite={addFavourite}
            followList={followList}
            removeFollower={removeFollower}
            addFollower={addFollower}
          />
        )}
      </div>
    </section>
  );
}
