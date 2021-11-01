import {useEffect, useState} from 'react';
import axios from 'axios';
import './Profile.css';
import CommentForm from './CommentForm';
import {
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoBookmarkOutline,
  IoRocketSharp,
} from 'react-icons/io5';
import CommentList from './CommentList';

export default function Profile () {
  const [state, setState] = useState ({
    userProfile: {},
    userPosts: [],
  });
  const [comments, setComments] = useState ([]);

  useEffect (() => {
    Promise.all ([
      axios.get (`/api/profile`),
      axios.get ('/api/posts/user_posts'),
      axios.get ('/api/comments'),
    ])
      .then (all => {
        const userProfile = all[0].data;
        const userPosts = all[1].data;
        const comments = all[2].data;

        setState (prev => ({...prev, userProfile, userPosts}));
        setComments (comments);
      })
      .catch (err => {
        console.log (err.message);
      });
  }, []);

  console.log ('All Comments! LINE 36 : ', comments);

  //To render the list of user's posts
  const userPosts = state.userPosts.map (obj => {
    console.log (obj);

    return (
      
      <div className="user--post">
        <img src={obj.image_video_url} alt="" />
        <div className="post-box">
        <p className="descrip">{obj.description}</p>
        </div>

        <div className="post-box-below">

        <span className="created">{obj.created}</span>
        <div>
          <form>
            <span>
              <IoHeartOutline onClick={() => console.log ('Liked! ')} />
            </span>
            <span>
              <IoChatbubbleOutline
                onClick={() => {
                  console.log ('Clicked for comment! ');
                }}
                />
            </span>
            <span>
              <IoBookmarkOutline onClick={() => console.log ('Saved! ')} />
            </span>
          </form>
                </div>
        <div>
          <CommentForm />
        </div>
        <div>
          <CommentList comments={comments} />
        </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <section className="user--profile-section">
        <div className="user--flex-wrapper">
          <img
            className="user--profile-picture"
            src={state.userProfile.profile_picture_url}
            alt=""
          />
          <span className="username">{state.userProfile.username}</span>
          <span className="user--profile-items">
            {state.userProfile.posts} Posts
          </span>
          <span className="user--profile-items">
            {state.userProfile.follower} Followers
          </span>
          <span className="user--profile-items">
            {state.userProfile.following} Following
          </span>
        </div>

      </section>
      <section className="user--posts">{userPosts}</section>
    </div>
  );
}
