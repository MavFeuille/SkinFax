import { useState, useEffect } from "react";
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

  console.log("followList:", followList)

  const [following, setFollowing] = useState(false);

    useEffect(() => {
        axios.get(`/api/follow/${props.user.id}`)
      .then((res) => {
        console.log("🚀 ~ file: Explore.jsx ~ line 29 ~ .then ~ res", res);
        setFollowing(res.data);
        console.log("🚀 ~ file: Explore.jsx ~ line 31 ~ .then ~ res.data", res.data)
      })
      .catch((err) => {
        console.log("🚀 ~ file: Explore.jsx ~ line 34 ~ findExistingFollowing ~ err", err);
      })
    }, [])
  
   // Follow new friend
   const handleFollow = () => {
    console.log("🚀 ~ file: Explore.jsx ~ line 70 ~ Explore ~ user.id", props.user.id)
   
    axios.post(`/api/follow/${creatorUserID}`, {userID: props.user.id})
    .then((res) => {
      console.log("🚀 ~ file: Explore.jsx ~ line 37 ~ .then ~ res", res)
      setFollowing(true);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  
  
  // Unfollow existing friend
    const handleUnfollow = () => {
      console.log("🚀 ~ file: Explore.jsx ~ line 70 ~ Explore ~ user.id", props.user.id)
    
      axios.delete(`/api/follow/${props.user.id}/${creatorUserID}`, {userID: props.user.id})
      .then((res) => {
          console.log("🚀 ~ file: Explore.jsx ~ line 37 ~ .then ~ res", res)
          setFollowing(false);
        })
        .catch((err) => {
            console.log(err.message);
          });
        }
   
  const followButton = () => following ? handleUnfollow : handleFollow;
  // console.log("🚀 ~ file: PostListItem.jsx ~ line 58 ~ PostListItem ~ following", following)

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
                <button className="btn-follow" onClick={handleFollow}> 
                  Follow
                </button>
              </form>
            }
            {followList && followList.includes(creatorUserID) && !isOwner && 
              // <p className="follow-tag">Following</p>
              <form onSubmit={event=> event.preventDefault()}>
                <button className="btn-follow" onClick={handleUnfollow}> 
                  Follow
                </button>
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
    </section>
  );
}
