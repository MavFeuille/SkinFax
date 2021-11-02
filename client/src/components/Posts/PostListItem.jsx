import { useState } from 'react';
import axios from "axios";
import CommentList from "../CommentList";

export default function PostListItem(props) {

  const { showFollow, creatorUserID, user, postId, profilePictureUrl, imageVideoUrl, isOwner, created, username, description, deletePost, addFavourite } = props
  
  const [follow, setFollow] = useState(user.id);
  
  
  const handleFollow = () => {
    console.log("🚀 ~ file: PostListItem.jsx ~ line 15 ~ PostListItem ~ user.id", user.id)
    axios.post(`/api/follow/${creatorUserID}`, {userID: user.id})
    .then((res) => {
      console.log(res);
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
            {showFollow && !isOwner && 
              <form onSubmit={event=> event.preventDefault()}>
                <button  onClick={handleFollow }>Follow</button>
              </form>
            }
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src={imageVideoUrl} alt="" />
        </div>
        <div className="reaction-container">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <button className="button-bookmark-icon" onClick={addFavourite}>
            <i className="far fa-bookmark"></i>
          </button>
          {isOwner && (
            <button onClick={deletePost}>
              <i className="far fa-trash-alt"></i>
            </button>
          )}
        </div>
        <div>
          <p>{description}</p>
          <p>{created}</p>
        </div>
        <div className="comment-form-container">
          <CommentList postId={postId} user={props.user} />
        </div>
      </section>
    );
}



