import { useState } from "react";
import axios from "axios";
import CommentList from "../CommentList";

export default function PostListItem(props) {
  const {
    followList,
    creatorUserID,
    user,
    postId,
    profilePictureUrl,
    imageVideoUrl,
    isOwner,
    created,
    username,
    description,
    deletePost,
    addFavourite,
  } = props;
  console.log(
    "🚀 ~ file: PostListItem.jsx ~ line 8 ~ PostListItem ~ creatorUserID",
    creatorUserID
  );

   // Follow new friend
   const handleFollow = () => {
    console.log("🚀 ~ file: Explore.jsx ~ line 70 ~ Explore ~ user.id", props.user.id)
   
    axios.post(`/api/follow/${creatorUserID}`, {userID: props.user.id})
    .then((res) => {
      console.log("🚀 ~ file: Explore.jsx ~ line 17 ~ .then ~ res", res)
      
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

    return (
      <section className="post">
        <div className="info">
          <div className="user">
            <div>
              <img
                className="user-profile-pic"
                src={profilePictureUrl}
                alt="profile image"
              />
            </div>
            <p className="username"> {username}</p>
            {followList && !followList.includes(creatorUserID) && !isOwner && 
              <form onSubmit={event=> event.preventDefault()}>
                <button  onClick={handleFollow }>Follow</button>
              </form>
            }
            {followList && followList.includes(creatorUserID) && !isOwner && 
              <p>Following</p>
            }
          </div>
        </div>
      

      <div className="post-content">
        <img className="post-image" src={imageVideoUrl} alt="" />
      </div>
      <div className="post--section">
        <div className="reaction-container">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          {!isOwner && (
            <button className="button-bookmark-icon" onClick={addFavourite}>
              <i className="far fa-bookmark"></i>
            </button>
          )}
          {isOwner && (
            <button className="trash--button" onClick={deletePost}>
              <i className="far fa-trash-alt"></i>
            </button>
          )}
        </div>
        <div>
          <p>{description}</p>
          <p>{created}</p>
        </div>
        <CommentList postId={postId} user={props.user} isOwner={isOwner} />
      </div>
    </section>
  );
}
