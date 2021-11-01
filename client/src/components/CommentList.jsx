import { FaRegTrashAlt } from "react-icons/fa";
import './CommentList.css'

export default function CommentList(props) {
  const existingComments = props.comments.map((obj) => {
    return (
      <div className="all-comments">
        <ul className="list-comments">
          <p className="username">{obj.username}</p>
          <p className="comment">{obj.comment}</p>
          <p className="created">{obj.created}</p>
        </ul>
        <div>
          {/* <form onSubmit={deleteComment(obj.id)} > */}
          {/* <form> */}
          {props.deleteComment && (
            <button onClick={() => props.deleteComment(obj)}>
              <FaRegTrashAlt />
            </button>
          )}
        </div>
      </div>
    );
  });

  return <>{existingComments}</>;
}
