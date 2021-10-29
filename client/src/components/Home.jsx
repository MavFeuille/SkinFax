import React, { useState, useEffect } from "react";
import axios from "axios";



export default function Home() {
  const [home, setHome] = useState([]);

  // const [imageIds, setImageIds] = useState();

  // const loadImages = async () => {
  //   try {
  //     const res = await fetch('/api/');
  //     const data = await res.json(); 
  //     console.log("🚀 ~ file: Home.jsx ~ line 13 ~ loadImages ~ data", data)
  //     setImageIds(data);
  //     console.log("🚀 ~ file: Home.jsx ~ line 17 ~ loadImages ~ setImageIds(data)", setImageIds(data))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  
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
        console.log("🚀 ~ file: Home.jsx ~ line 43 ~ combinedPost.sort ~ unixDate1", unixDate1)
        
        const date2 = new Date(b.created.replace(' ', "T"));
        const unixDate2 = Math.floor(date2.getTime()/1000);
        
        // console.log ('a', a);
        // console.log("new date: ", new Date(a.created.replace(' ', "T")))
        return unixDate2 - unixDate1;
      });
      
      
      // console.log("🚀 ~ file: Home.jsx ~ line 44 ~ .then ~ combinedPost", combinedPost)

      setHome(combinedPosts);
      
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  // const userPosts = home.userPosts.map((obj) => {
  //   return (

  //     <div>
  //       <p>{obj.username}</p>
  //       <img src={obj.image_video_url} />
  //       <p>{obj.description}</p>
  //       <p>{obj.created}</p>
  //     </div>
  //   )
  // })

  
  const combinedPosts = home.map((obj, index) => {
    
    console.log("obj", obj)
    return (

      <div key={index}> 
       <p> {obj.username}</p>
        <img src={obj.image_video_url} />
        <p>{obj.description}</p>
        <p>{obj.created}</p>
      </div>
    )
  })
  console.log("🚀 ~ file: Home.jsx ~ line 84 ~ combinedPosts ~ combinedPosts", combinedPosts)

  return(

    <div>
    <h1 className="title">Home</h1>
    {combinedPosts}
  
    {/* {followingPosts} */}
  
    </div>
  )
}

