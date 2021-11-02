import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import { HOME_PAGE } from "../NavItems";
import './CreatePost.css';
import Button from 'react-bootstrap/Button'

export default function CreatePost(props) {
  const [createPost, setCreatePost] = useState([]);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [textInputState, setTextInputState] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  useEffect(() => {
    axios
      .get("/api/posts/create_post")
      .then((res) => {
        setCreatePost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitFile = (event) => {
    console.log("submitting file...");
    event.preventDefault();

    if (!previewSource) return;
    uploadFile(previewSource);
  };

  const uploadFile = async (base64EncodedImage) => {
    const data = { data: base64EncodedImage, text: textInputState };

    axios
      .post("/api/posts/create_post", data)
      .then(() => {
        props.setPage(HOME_PAGE);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="create-post-box">
      <form  onSubmit={handleSubmitFile} className="form">
        <div className="create-post-select-image">
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            // value={fileInputState}
            className="form-input"
          />
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "250px" }} />
        )}
        </div>
      <div className="create-post-textbox-container">
        <input
          className="input"
          type="text"
          name="Description"
          placeholder="Write a caption... "
          value={textInputState}
          onChange={(event) => setTextInputState(event.target.value)}
          className="form-input"
        />
        
        <div>
          <Button variant="primary" className="btn-create-post" type="submit">Post</Button>{' '}
        </div>
      </div>
      </form>
      </div>
    
  );
}
