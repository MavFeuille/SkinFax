import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import './Home.css';

export default function Home(props) {
  const [home, setHome] = useState([]);
  const [comments, setComments] = useState([]);

  // const [heart, set]
  useEffect(() => {
    Promise.all([
      axios.get("/api/posts/user_posts"),
      axios.get("/api/posts/follow_posts"),
      // axios.get("/api/comments")
    ])
      .then((all) => {
        const userPosts = all[0].data;
        // console.log("🚀 ~ file: Home.jsx ~ line 25 ~ .then ~ userPosts", userPosts)
        const followingPosts = all[1].data;
        // console.log("🚀 ~ file: Home.jsx ~ line 27 ~ .then ~ followingPosts", followingPosts)
        // const comments = all[2].data;
        const combinedPosts = userPosts.concat(followingPosts);

        combinedPosts.sort((a, b) => {
          const date1 = new Date(a.created.replace(" ", "T"));
          const unixDate1 = Math.floor(date1.getTime() / 1000);

          const date2 = new Date(b.created.replace(" ", "T"));
          const unixDate2 = Math.floor(date2.getTime() / 1000);

          return unixDate2 - unixDate1;
        });
        setHome(combinedPosts);
        // setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [setHome]);
    
    useEffect(() => {
      getAllComments();
    }, []);
    
  
  
  const getAllComments = () => {
  
    axios
      .get(`/api/comments/`)
      .then((res) => {
        const comments = res.data;
        console.log(
          "🚀 ~ file: Home.jsx ~ line 48 ~ .then ~ comments",
          comments
        );
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  /* Delete comments
  passing in the comment ids as params
  use a useEffect onclick = refresh or re-render*/
  const deleteComment = (comment) => {
    if (comment.user_id === props.user.id) {
      console.log("🚀 DELETE_____");
      axios.delete(`/api/comments/deleteComment/${comment.id}`).then((res) => {
        getAllComments();
        console.log("======> Comment deleted!!");
      });
      // .catch((err) => {
      //   console.log("🚀 ~ file: Home.jsx ~ line 71 ~ deleteComment ~ err", err)
      //   // err.status(401).send("You are not authorized to delete this comment.")
      // })
    }
    // else {
    //   res.status(401).send("You are not authorized to delete this comment.")
    // }
  };

  

  const existingComments = comments.map((obj) => {
    console.log("🚀 ~ file: Home.jsx ~ line 85 ~ existingComments ~ obj", obj)
  
    
    return (
      <section>
        <div className="comment">
          <div className="comment-content">
            <div className="comment-follower">
              <img className="comment-follower-profile-pic" src={obj.profile_picture_url} alt=""/>
              <div className="comment-follower-username">
                <p>{obj.username}</p>
              </div>
            
            <p>{obj.comment}</p>
          </div>
            <div className="button-delete-comment-container">
              {/* <form onSubmit={deleteComment(obj.id)} > */}
              {/* <form> */}

              <button  className="button-delete-comment" onClick={() => deleteComment(obj)}>
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div className="comment-created">
            <p>{obj.created}</p>
           </div>
        </div>
      </section>
    );
  });

  // To render all posts of users him/herself and those they're following
  const combinedPosts = home.map((obj) => {
    return (
      <div className="post" key={obj.id}>
        <div className="info">
          <div className="user">
            <div>
              <img className="user-profile-pic"src={obj.profile_picture_url} alt="profile image"/>
            </div>
              <p className="username"> {obj.username}</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src={obj.image_video_url} alt="" />
        </div>
        <div className="reaction-container">
          <i class="far fa-heart" onClick={() => console.log("Liked!")}></i>
          <i class="far fa-comment" onClick={() => console.log("Click to leave comment!")}></i>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("clicked fav");
              axios
                .post("/api/favourites/", {
                  id: props.user.id,
                  post_id: obj.id,
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }}
            >
            <button className="button-bookmark-icon" type="submit">
              <i class="far fa-bookmark"></i>
            </button>
          </form>
          </div>
        <div>
          <p>{obj.description}</p>
          <p>{obj.created}</p>
        </div>
          <div className="comment-form-container">
            <CommentForm className="comment-form" getAllComments={getAllComments} />
            <p>{existingComments}</p>
          </div>
       </div>  
      
    );  
  });

  return (
    <section className="mainContainer">
      <div>
        <h1 className="title">Home</h1>
        {combinedPosts}
      </div>
    </section>
  );
}
