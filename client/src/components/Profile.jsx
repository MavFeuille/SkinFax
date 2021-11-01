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
        <p>{obj.description}</p>
        <span>{obj.created}</span>
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
      {/* <div class="td-sub-footer-container">
        <div class="td-container">
          <div class="td-pb-row">
            <div class="td-pb-span12 td-sub-footer-menu">
              <div class="menu-top-container">
                <ul id="menu-top" class="td-subfooter-menu">
                  <li
                    id="menu-item-439"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-first td-menu-item td-normal-menu menu-item-439"
                  >
                    <a href="https://webdevtrick.com/about/">About Us</a>
                  </li>
                  <li
                    id="menu-item-495"
                    class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-495"
                  >
                    <a href="https://webdevtrick.com/contact-us/">Contact Us</a>
                  </li>
                  <li
                    id="menu-item-440"
                    class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-440"
                  >
                    <a href="https://webdevtrick.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    id="menu-item-441"
                    class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-441"
                  >
                    <a href="https://webdevtrick.com/terms-of-service/">
                      Terms Of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="td-pb-span12 td-sub-footer-copy">
              {' '}© WebDevTrick 2019
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
