import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../Posts/PostList";

export default function Profile(props) {
  const [state, setState] = useState({
    userProfile: {},
    userPosts: [],
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profile`),
      axios.get(`/api/posts/users/${props.user.id}`),
      axios.get("/api/comments"),
    ])
      .then((all) => {
        const userProfile = all[0].data;
        const userPosts = all[1].data;
        const comments = all[2].data;

        setState((prev) => ({ ...prev, userProfile, userPosts }));
        setComments(comments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deletePost = function (id) {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        setState({
          ...state,
          userPosts: state.userPosts.filter((post) => post.id !== id),
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <section className="user--profile-section">
        <div className="user--flex-wrapper">
          <img
            className="user--profile-picture"
            src={state.userProfile.profile_picture_url}
            alt=""
          />
          <span className="username">{state.userProfile.username}</span>
          <span className="user--profile-items">
            {state.userProfile.posts} Posts
          </span>
          <span className="user--profile-items">
            {state.userProfile.follower} Followers
          </span>
          <span className="user--profile-items">
            {state.userProfile.following} Following
          </span>
        </div>
      </section>
      {state.userPosts.length && (
        <PostList
          posts={state.userPosts}
          user={props.user}
          deletePost={deletePost}
        />
      )}
    </div>
  );
}
