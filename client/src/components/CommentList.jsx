import { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";

export default function CommentList(props) {
  const { postId, user, isOwner } = props;

  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/posts/${postId}/comments`)
  //     .then((res) => {
  //       setComments(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const deleteComment = (id) => {
    axios
      .delete(`/api/comments/${id}`)
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addComment = (text) => {
    axios
      .post("/api/comments/", { text, userId: user.id, postId })
      .then((res) => {
        const record = res.data;

        const comment = {
          id: record.id,
          comment: record.comment,
          created: record.created,
          username: user.handle,
          profile_picture_url: user.profile_picture_url, // need to fix mario_dabaddest pp
        };
        setComments([comment, ...comments]);
      });
  };

  const existingComments = comments.map((comment) => {
    return (
      <div className="comment-container" key={comment.id}>
        <section>
          <p className="username">
            <img
              className="user-profile-pic"
              src={comment.profile_picture_url}
            />
            {comment.username}
          </p>
          <p>{comment.comment}</p>
          <p>{comment.created}</p>
        </section>
        <section>
          {isOwner && (
            <button
              className="trash--button"
              onClick={() => deleteComment(comment.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          )}
        </section>
      </div>
    );
  });

  return (
    <>
      <CommentForm setComments={setComments} addComment={addComment} />
      {existingComments}
    </>
  );
}
