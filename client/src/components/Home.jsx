import React, { useState, useEffect } from "react";
import {Image} from 'cloudinary-react';
import axios from "axios";



export default function Home() {
  // const [home, setHome] = useState([])
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/api/');
      const data = await res.json(); 
      console.log("🚀 ~ file: Home.jsx ~ line 13 ~ loadImages ~ data", data)
      setImageIds(data);
      console.log("🚀 ~ file: Home.jsx ~ line 17 ~ loadImages ~ setImageIds(data)", setImageIds(data))
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {  
    axios.get("/")
    .then ((res) => {
      // loadImages();
      // setHome(res.data)
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  return(

    <div>
    <h1 className="title">Home</h1>
      {imageIds && imageIds.map((imageId, index) => {
        <Image 
          key={index} 
          cloudName="skinfax"
          publicId={imageId} 
          width="300" 
          crop="scale"
        />
       
      })}
    </div>
  )
}

