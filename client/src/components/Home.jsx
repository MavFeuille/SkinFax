import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [value, setValue] = useState([])

  useEffect(() => {  
    axios.get("/")
    .then ((res) => {
       setValue(res.data)
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  return(
    <h1>Home</h1>

  
  )
}