import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../Posts/PostList";
import "./Home.css";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

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
        setPosts(combinedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addFavourite = (id) => {
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

  return (
    <section className="mainContainer">
      <div>
        {posts && (
          <PostList
            posts={posts}
            user={props.user}
            deletePost={deletePost}
            addFavourite={addFavourite}
          />
        )}
      </div>
    </section>
  );
}
