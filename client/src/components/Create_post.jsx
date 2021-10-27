import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CreatePost() {
  const [value, setValue] = useState([])
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('');
  const [changeOnInput, setChangeOnInput] = useState('');
  const handleFileInputChange= (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }
   useEffect(() => {  
    axios.get("/api/create_post")
    .then ((res) => {
       setValue(res.data)
    }).catch ((err) => {
       console.log (err)
   })
  }, [])

  const handleSubmitFile = (event) => {
    console.log("submitting file...")
    event.preventDefault();
    if(!previewSource) return;
    uploadFile(previewSource);
  }

  const uploadFile = async (base64EncodedImage) => {
    console.log("🚀 ~ file: create_post.jsx ~ line 38 ~ uploadFile ~ base64EncodedImage", base64EncodedImage);
    try {
      await fetch('/api/create_post', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage, text:"Testing"}),
        headers: {'Content-type': 'application/json'}

      }).then((res)=> {
        return res.json();
      }).then((res)=> {
        console.log("Response from fetch in Line 48: ", res);
      })
    } catch (err) {
      // console.log("🚀 ~ file: create_post.jsx ~ line 47 ~ UploadFile ERROR ~:", err);
      console.log(err);
    }
  }
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