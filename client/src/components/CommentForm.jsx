import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./CommentForm.css";

export default function CommentForm(props) {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("Write a comment...");

  const clearInput = () => {
    setText("");
  };

  const addComment = () => {
    clearInput();
    if (text.length > 0) {
      props.addComment(text, props.postId);
    }
  };

  return (
    <section className="create-comment-form-section">
      <div className="create-comment-form">
        <Form>
          <FloatingLabel
            controlId="floatingTextarea"
            label={label}
            className="mb-3"
            onFocus={(event) => {
              setLabel("");
            }}
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={text}
              type="string"
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </FloatingLabel>
          <div className="button-create-comment">
            <Button
              variant="outline-primary"
              type="button"
              onClick={addComment}
            >
              Post
            </Button>{" "}
          </div>
        </Form>
      </div>
    </section>
  );
}
