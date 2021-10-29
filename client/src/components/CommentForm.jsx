import { useState } from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IoRocketSharp } from "react-icons/io5";

export default function CommentForm() {
  const [comment, setComment] = useState("");

  return (
    <div>
      <Form>
        <FloatingLabel controlId="floatingTextarea" label="Write a comment..." className="mb-3">
          <Form.Control 
            as="textarea" 
            placeholder="Leave a comment here" 
            value={comment} type="string" 
            onChange={(event) => {setComment(event.target.value)}}
          />
          <span 
            onSubmit={(event) => event.preventDefault()}
            onClick={() => console.log("Firing comments....")}>
              <IoRocketSharp />
          </span>
        </FloatingLabel>
      </Form>
    </div>
    
  )
}