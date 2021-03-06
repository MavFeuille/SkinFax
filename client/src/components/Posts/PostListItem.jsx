import { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "../CommentList";
import classnames from 'classnames';

export default function PostListItem(props) {
  const {
    addFollower,
    removeFollower,
    followList,
    creatorUserID,
    postId,
    profilePictureUrl,
    imageVideoUrl,
    isOwner,
    user,
    created,
    username,
    description,
    deletePost,
    addFavourite,
  } = props;

  const [isActive, setActive] = useState(false);
  //if isActive/onclick toggle button colour change to pink
  // which is heart-active
  const toggleClass = () => {
    //changes to the opposite
    setActive(!isActive);
  };

  console.log(
    "🚀 ~ file: PostListItem.jsx ~ line 8 ~ PostListItem ~ user",
    props.user
  );

  // Follow new friend
  const handleFollow = () => {

    addFollower(creatorUserID, props.user.id)
  }
  

  const handleUnFollow = () => {
    
    removeFollower(creatorUserID, props.user.id)
  
  };
  

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
          {followList && !followList.includes(creatorUserID) && !isOwner && (
            <form onSubmit={(event) => event.preventDefault()}>
              <button className="btn-follow" onClick={handleFollow}>
                Follow
              </button>
            </form>
          )} 
          {followList && followList.includes(creatorUserID) && !isOwner && 
            (<form onSubmit={(event) => event.preventDefault()}>
            <button className="btn-follow" onClick={handleUnFollow}>
              Following
            </button>
          </form>)
          } 
          {/* {followList && followList.includes(creatorUserID) && !isOwner && (
            <p className="follow-tag">Following</p>
          )} */}
        </div>
      </div>

      <div className="post-content">
        <img className="post-image" src={imageVideoUrl} alt="" />
      </div>
      <div className="post-wrapper">
        <div className="reaction-container">
          {/* <i className="far fa-heart"></i> */}
          {/* <div className="heart-btn" onClick={toggleClass}>
            <div className={classnames({content: true, liked: isActive})}>
              <span className="heart heart-liked"></span>
              <span className="like">Like</span>
              {/* <span className="num"></span> */}
              {/* <span className="heart"></span> */}
            {/* </div>
          </div> */} 
          <div className="heart-btn" onClick={toggleClass}>
            <div className={classnames({content: true, liked: isActive})}>
              {/* <span className="heart heart-liked"></span> */}
              <span className="like"><i class="far fa-heart"></i></span>
                
               {/* <span className="num"></span>  */}
               {/* <span className="heart"></span>  */}
            </div>
          </div>


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
        <div className="comment-form-container">
          <CommentList postId={postId} user={props.user} isOwner={isOwner} />
        </div>
      </div>
    </section>
  );
}
