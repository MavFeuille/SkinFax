import { useEffect, useState } from "react";
import axios from 'axios';

export default function Profile() {
  const [state, setState] = useState({
    userProfile: {},
    userPosts: []
  })

  useEffect(() => {
    Promise.all([
      axios.get('/api/profile'),
      axios.get('/api/profile/posts')
    ])
    .then((all) => {
      const userProfile = all[0].data;
      const userPosts = all[1].data;
      setState(prev => ({...prev, userProfile, userPosts}))
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])

  const userPosts = state.userPosts.map((obj) => {
    return (
      <div className="user--post">
      <img src={obj.img_video_url} alt="" />
      <p>{obj.description}</p>
      <span>{obj.created}</span>
      </div>
    )
  })

  return(
    <div>
       <section className="user--profile-section">
        <div className="user--flex-wrapper">
        <img className="user--profile-picture" src={state.userProfile.profile_picture_url} alt="" />
        <span className="username">{state.userProfile.username}</span>
        <span className="user--profile-followers">
          {state.userProfile.followers} Followers
        </span>
        </div>
      </section>
    <section className="user--posts">
      {userPosts}
    </section>
    </div>
  );
}