import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp, IoBookmarkOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";


export default function Home() {
  const [home, setHome] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/posts/user_posts"),
      axios.get("/api/posts/follow_posts"),
      axios.get("/api/comments")
    ])
      .then((all) => {
        const userPosts = all[0].data;
        const followingPosts = all[1].data;
        const comments = all[2].data;
        const combinedPosts = userPosts.concat(followingPosts);

        combinedPosts.sort((a, b) => {
          const date1 = new Date(a.created.replace(" ", "T"));
          const unixDate1 = Math.floor(date1.getTime() / 1000);

          const date2 = new Date(b.created.replace(' ', "T"));
          const unixDate2 = Math.floor(date2.getTime()/1000);
        
        return unixDate2 - unixDate1;
      });
      setHome(combinedPosts);
      setComments(comments);
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  // To render all comments of a post
  const existingComments = comments.map((obj) => {
    
    return (
      <div className="all-comments">
        <div>
          <p>{obj.username}</p>
          <p>{obj.comment}</p>
          <p>{obj.created}</p>
        </div>
        <div>
          <form>
            <FaRegTrashAlt onClick={() => {console.log("Deleting...")}}/>
          </form>
        </div>
      </div>
   
    )
  })

  // To render all posts of users him/herself and those they're following
  const combinedPosts = home.map((obj, index) => {
    
    return (
      <div key={index}>
        <p> {obj.username}</p>
        <img src={obj.image_video_url} alt="" />
        <p>{obj.description}</p>
        <p>{obj.created}</p>
        <form>
             <span>
               <IoHeartOutline onClick={() => console.log ("Liked! ")}/>
             </span>
             <span>
               <IoChatbubbleOutline onClick={() => {console.log ("Clicked for comment! ")}}/>
             </span>
             <span>
               <IoBookmarkOutline onClick={() => console.log ("Saved! ")}/>
             </span>
           </form>
      <div>
        <CommentForm />
      </div>
      <div>
          <p>{existingComments}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="title">Home</h1>
      {combinedPosts}
    </div>
  );
}
