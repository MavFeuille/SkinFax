import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import { IoChatbubbleOutline, IoHeartOutline, IoHeartSharp, IoBookmarkOutline, IoRocketSharp } from "react-icons/io5";
import { Form, FloatingLabel } from 'react-bootstrap';



export default function Home() {
  const [home, setHome] = useState([]);
  const [heart, setHeart] = useState([])
  
  useEffect(() => { 
    Promise.all([
      axios.get("/api/posts/getUserPost"),
      axios.get("/api/posts/getFollowingPost")
    ]) 
    .then ((all) => {
      const userPosts = all[0].data;
      // console.log("🚀 ~ file: Home.jsx ~ line 33 ~ .then ~ userPosts", userPosts)

      const followingPosts =all[1].data;
      // console.log("🚀 ~ file: Home.jsx ~ line 35 ~ .then ~ followingPosts", followingPosts)
      
      const combinedPosts = userPosts.concat(followingPosts)
      
      combinedPosts.sort((a, b) => {
        const date1 = new Date(a.created.replace(' ', "T"));
        const unixDate1 = Math.floor(date1.getTime()/1000);

        const date2 = new Date(b.created.replace(' ', "T"));
        const unixDate2 = Math.floor(date2.getTime()/1000);
        
        return unixDate2 - unixDate1;
      });
      setHome(combinedPosts);
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  const combinedPosts = home.map((obj, index) => {
    
    return (

      <div key={index}> 
       <p> {obj.username}</p>
        <img src={obj.image_video_url} />
        <p>{obj.description}</p>
        <p>{obj.created}</p>
        <span onClick={() => console.log ("Liked! ")}><IoHeartOutline /></span>
        <span onClick={() => console.log ("Clicked for comment! ")}><IoChatbubbleOutline /></span>
        <span onClick={() => console.log ("Saved! ")}><IoBookmarkOutline /></span>
        <CommentForm />
      </div>
    )
  })
  // console.log("🚀 ~ file: Home.jsx ~ line 84 ~ combinedPosts ~ combinedPosts", combinedPosts)
  
  return(
    
    <div>
    <h1 className="title">Home</h1>
    {combinedPosts}
    
  
    {/* {followingPosts} */}
  
    </div>
  )
}

