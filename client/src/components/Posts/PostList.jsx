import axios from "axios";
import { useState, useEffect } from "react";
import PostListItem from "./PostListItem";

export default function Favourites(props) {
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

  const allPosts = posts.map((posts) => {
    return (
      <PostListItem
        key={post.id}
        created={post.created}
        username={post.username}
        url={post.image_video_url}
        description={post.description}
        deletePost={() => deletePost(post.id)}
      />
    );
  });

  return <div>{allPosts}</div>;
}