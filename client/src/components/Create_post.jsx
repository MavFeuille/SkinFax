import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CreatePost() {
  const [value, setValue] = useState([])
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('');
  const handleFileInputChange= (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile(file)
  }


   useEffect(() => {  
    axios.get("/api/create_post")
    .then ((res) => {
       setValue(res.data)
    }).catch ((err) => {
       console.log (err)
   }, [])
  })



 
    return(
      <div>
        <h1>Upload</h1>
        <form onSubmit={handleSubmitFile} className="form">
          <input
           type="file"
           name="image"
           onChange={handleFileInputChange} 
           value={fileInputState} 
           className="form-input" />
        <button className='btn' type="submit">Submit</button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" 
          style={{height: '250px'}}/>
        )}
      </div>
    )
}