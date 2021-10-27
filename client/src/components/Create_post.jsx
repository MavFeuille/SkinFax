import React, { useState } from "react";

export default function CreatePost() {
  const [fileInputState, setFileInputState] = useState('');
  // const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('');
  const handleFileInputChange= (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    // previewFile(file)
  }

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource
  //   }
  // }


  return (
    <div>
      <h1>Upload</h1>
      <form>
        <input 
          type="file"
          name="image"
          onChange={handleFileInputChange} 
          value={fileInputState} 
          className="form-input"/>
      </form>
      <button className='btn' type="button">Submit</button>
    </div>
  )
}