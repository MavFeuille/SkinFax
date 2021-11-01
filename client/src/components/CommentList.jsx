
export default function CommentList(props) {
  const existingComments = props.comments.map((obj) => {
    return (
      <div className="all-comments">
        <div>
          <p>{obj.username}</p>
          <p>{obj.comment}</p>
          <p>{obj.created}</p>
        </div>
        <div>
          {/* <form onSubmit={deleteComment(obj.id)} > */}
          {/* <form> */}
          {props.deleteComment && (
            <button onClick={() => props.deleteComment(obj)}>
              <i class="far fa-trash-alt"></i>
            </button>
          )}
        </div>
      </div>
    );
  });

  return <>{existingComments}</>;
}
