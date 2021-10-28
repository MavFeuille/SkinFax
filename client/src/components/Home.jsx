import React, { useState, useEffect } from "react";
import axios from "axios";



export default function Home() {
  const [home, setHome] = useState([])
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
    axios.get("/api/")
    .then ((res) => {
      // loadImages();
      setHome(res.data)
      console.log("🚀 ~ file: Home.jsx ~ line 28 ~ .then ~ res.data", res.data)
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  const mainFeedPosts = home.map((obj) => {
    return (
      <div>
        <p>{obj.username}</p>
        <img src={obj.image_video_url} />
        <p>{obj.description}</p>
        <p>{obj.created}</p>
      </div>
    )
  })




  return(

    <div>
    <h1 className="title">Home</h1>
    {mainFeedPosts}
  
    </div>
  )
}

