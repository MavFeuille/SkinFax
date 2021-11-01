import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';

export default function CommentList(props) {
  const { postId, user } = props;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = () => {
    
    axios
      .get(`/api/posts/${postId}/comments`)
      .then((res) => {
        const comments = res.data;
        console.log(
          "🚀 ~ file: Posts.jsx ~ line 48 ~ .then ~ comments",
          comments
        );
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

      /* Delete comments
    passing in the comment ids as params
    use a useEffect onclick = refresh or re-render*/
    const deleteComment = (comment) => {
      
        console.log("🚀 DELETE_____");
        axios.delete(`/api/comments/deleteComment/${comment.id}`).then((res) => {
          getAllComments();
          console.log("======> Comment deleted!!");
        });
        // .catch((err) => {
        //   console.log("🚀 ~ file: Home.jsx ~ line 71 ~ deleteComment ~ err", err)
        //   // err.status(401).send("You are not authorized to delete this comment.")
        // })
      
      // else {
      //   res.status(401).send("You are not authorized to delete this comment.")
      // }
    };



  const existingComments = comments.map((obj) => {
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
          {deleteComment && (
            <button onClick={() => deleteComment(obj)}>
              <i class="far fa-trash-alt"></i>
            </button>
          )}
        </div>
      </div>
    );
  });

  return <> 
  <CommentForm setComments={setComments}/> 
  {existingComments}
  </>;
}


// const existingComments = comments.map((obj) => {
//   console.log("🚀 ~ file: Home.jsx ~ line 85 ~ existingComments ~ obj", obj)

  
//   return (
//     <section>
//       <div className="comment">
//         <div className="comment-content">
//           <div className="comment-follower">
//             <img className="comment-follower-profile-pic" src={obj.profile_picture_url} alt=""/>
//             <div className="comment-follower-username">
//               <p>{obj.username}</p>
//             </div>
          
//           <p>{obj.comment}</p>
//         </div>
//           <div className="button-delete-comment-container">
//             {/* <form onSubmit={deleteComment(obj.id)} > */}
//             {/* <form> */}

//             <button  className="button-delete-comment" onClick={() => deleteComment(obj)}>
//               <i class="far fa-trash-alt"></i>
//             </button>
//           </div>
//         </div>
//         <div className="comment-created">
//           <p>{obj.created}</p>
//          </div>
//       </div>
//     </section>
//   );
// });
