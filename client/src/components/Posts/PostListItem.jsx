import CommentList from "../CommentList";

export default function PostListItem(props) {
  const {
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
        </div>
      </div>
      <div className="post-content">
        <img className="post-image" src={imageVideoUrl} alt="" />
      </div>
      <div className="reaction-container">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <button className="button-bookmark-icon" onClick={addFavourite}>
          <i class="far fa-bookmark"></i>
        </button>
        {isOwner && (
          <button onClick={deletePost}>
            <i class="far fa-trash-alt"></i>
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
