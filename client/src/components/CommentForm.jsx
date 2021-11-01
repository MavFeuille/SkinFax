import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import './CommentForm.css';


export default function CommentForm(props) {
  const {setComments} = props;

  const [comment, setComment] = useState("");
  const [label, setLabel] = useState("Write a comment...");

  const clearInput = () => {
    setComment("");
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    console.log("Comment length: ", comment.length);
    console.log(
      "🚀 ~ file: CommentForm.jsx ~ line 19 ~ CommentForm ~ comment",
      comment
    );

    if (comment.length > 0) {
      postComment(comment);
    }
  };

  const postComment = async (comment) => {
    console.log(
      "🚀 ~ file: CommentForm.jsx ~ line 20 ~ postComment ~ comment",
      comment
    );

    axios
      .post("/api/comments/postComment", { comment: comment })
      .then((res) => {
        // update comment data instead, dont reload all comments
        setComment(res.data);
        console.log("🚀 ~ file: CommentForm.jsx ~ line 44 ~ .then ~ res.data", res.data)
        clearInput();
        console.log("🚀 ~ file: CommentForm.jsx ~ line 33 ~ .then ~ res", res);
        setComments((prev)=> [{comment, username: "bob"}, ...prev])
      });
  };

  return (
    <section className="create-comment-form-section">
      {/* <div className="create-comment-form-container"> */}
        <div className="create-comment-form">
          <Form onSubmit={handleSubmitComment}>
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
                value={comment}
                type="string"
                onChange={(event) => {
                  setComment(event.target.value);
                }}
              />
              
            </FloatingLabel>
        <div className="button-create-comment">
          <Button
            variant="outline-primary"
            type="submit"
            onClick={() => console.log("validating before post")}
          >
            Post
          </Button>{" "}
        </div>
          </Form>
        </div>
    </section>
  );
}
