import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [home, setHome] = useState([])
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/api/');
      const data = await res.json(); 
      console.log("🚀 ~ file: Home.jsx ~ line 13 ~ loadImages ~ data", data)
      setImageIds(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {  
    loadImages();
  //   axios.get("/")
  //   .then ((res) => {
  //      setHome(res.data)
  //   }).catch ((err) => {
  //      console.log (err)
  //  })
  }, [])

  return(
    <h1>Home</h1>
    

  
  )
}