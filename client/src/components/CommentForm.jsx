import { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function CommentForm(props) {
  const [comment, setComment] = useState("");
  const [label, setLabel] = useState("Write a comment...")
  
  const clearInput = () => {
    setComment("");
  }
  
  const handleSubmitComment = (event) => {
    event.preventDefault();

    console.log("Comment length: ", comment.length)
    console.log("🚀 ~ file: CommentForm.jsx ~ line 19 ~ CommentForm ~ comment", comment)

    if(comment.length > 0) {
      
      postComment(comment);
    }
  }

  const postComment = async (comment) => {
    console.log("🚀 ~ file: CommentForm.jsx ~ line 20 ~ postComment ~ comment", comment)
    


    axios.post('/api/comments/postComment', {comment: comment})
      .then((res) => {
        props.getAllComments();
        setComment(res.data);
        clearInput();
        console.log("🚀 ~ file: CommentForm.jsx ~ line 33 ~ .then ~ res", res);
      })
  }

  return (
    <div>
      <Form onSubmit={handleSubmitComment}>
        <FloatingLabel controlId="floatingTextarea" label={label} className="mb-3" onFocus={(event) => {setLabel("")}}>
          <Form.Control 
            as="textarea" 
            placeholder="Leave a comment here" 
            value={comment} 
            type="string" 
            onChange={(event) => {setComment(event.target.value)}}
          />
           <Button 
            variant="outline-primary" 
            type="submit"
            onClick={() => console.log("validating before post")}>Post</Button>{' '}
        </FloatingLabel>
      </Form>
    </div>
    
  )
}