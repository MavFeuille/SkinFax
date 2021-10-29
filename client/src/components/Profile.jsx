import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp, IoBookmarkOutline, IoRocketSharp } from "react-icons/io5";


export default function Profile() {
  const [state, setState] = useState({
    userProfile: {},
    userPosts: [],
  });

  useEffect(() => {
    Promise.all([axios.get(`/api/profile`), axios.get("/api/posts/user_posts")])
      .then((all) => {
        const userProfile = all[0].data;
        const userPosts = all[1].data;
        console.log(userProfile);
        setState((prev) => ({ ...prev, userProfile, userPosts }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //To render the list of user's posts
  const userPosts = state.userPosts.map((obj) => {
    console.log(obj);

    return (
      <div className="user--post">
        <img src={obj.image_video_url} alt="" />
        <p>{obj.description}</p>
        <span>{obj.created}</span>
        <div>
          <span onClick={() => console.log ("Liked! ")}>
            <IoHeartOutline />
          </span>
          <span onClick={() => {console.log ("Clicked for comment! ")}}>
            <IoChatbubbleOutline />
          </span>
          <span onClick={() => console.log ("Saved! ")}>
            <IoBookmarkOutline />
          </span>
        </div>
        <div>
          <CommentForm />
          
        </div>
      </div>
    );
  });

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
      <section className="user--posts">{userPosts}</section>
    </div>
  );
}
