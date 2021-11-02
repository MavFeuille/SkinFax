import CommentList from "../CommentList";
import {useState} from 'react';

export default function PostListItem(props) {
  const { postId, profilePictureUrl, imageVideoUrl, isOwner, created, username, description, deletePost, addFavourite } = props

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <section className="post"> 
        <div className="info">
          <div className="user">
            <div>
              <img className="user-profile-pic" src={profilePictureUrl} alt="profile image"/>
            </div>
              <p className="username"> {username}</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src={imageVideoUrl} alt="" />
        </div>
        <div className="reaction-container">


          <div className={isActive ? "heart-btn": null} onClick={toggleClass}>
            <div className="content">
              <span className="heart"></span>
              <span className="like">Like</span>
              {/* <span className="num"></span> */}
              {/* <span className="heart"></span> */}
            </div>
          </div>

          <i className="far fa-comment" onClick={() => console.log("Click to leave comment!")}></i>
            <button className="button-bookmark-icon" onClick={addFavourite}>
              <i class="far fa-bookmark"></i>
            </button>
          {isOwner &&
          <i class="far fa-trash-alt" onClick={deletePost}></i>
          }
          </div>
        <div>
          <p>{description}</p>
          <p>{created}</p>
        </div>
        <div className="comment-form-container">
           <CommentList postId={postId}/>
           
         </div>
    </section>
  );
}

// const combinedPosts = home.map(( => {
//   return (
//     <div className="post" key={id}>
//       <div className="info">
//         <div className="user">
//           <div>
//             <img className="user-profile-pic"src={profile_picture_url} alt="profile image"/>
//           </div>
//             <p className="username"> {username}</p>
//         </div>
//       </div>
//       <div className="post-content">
//         <img className="post-image" src={image_video_url} alt="" />
//       </div>
//       <div className="reaction-container">
//         <i class="far fa-heart" onClick={() => console.log("Liked!")}></i>
//         <i class="far fa-comment" onClick={() => console.log("Click to leave comment!")}></i>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             console.log("clicked fav");
//             axios
//               .post("/api/favourites/", {
//                 id: props.user.id,
//                 post_id: id,
//               })
//               .then((res) => {
//                 console.log(res);
//               })
//               .catch((err) => {
//                 console.log(err.message);
//               });
//           }}
//           >
//           <button className="button-bookmark-icon" type="submit">
//             <i class="far fa-bookmark"></i>
//           </button>
//         </form>
//         </div>
//       <div>
//         <p>{description}</p>
//         <p>{created}</p>
//       </div>
//         <div className="comment-form-container">
//           <CommentForm className="comment-form" getAllComments={getAllComments} />
//           <p>{existingComments}</p>
//         </div>
//      </div>  
    
//   );  
// });