import { useEffect, useState } from "react";
import axios from 'axios';


export default function Profile() {
  const [state, setState] = useState({
    userProfile: {},
    userPosts: []
  })
  const [previewSource, setPreviewSource] = useState('')

  // axios.get(`/api/profiles/${userID}`)

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/`),
      axios.get('/api/posts/getUserPost')
    ])
    .then((all) => {
      const userProfile = all[0].data;
      console.log("🚀 ~ file: Profile.jsx ~ line 17 ~ .then ~ userProfile", userProfile)
      const userPosts = all[1].data;
      console.log("🚀 ~ file: Profile.jsx ~ line 19 ~ .then ~ userPosts", userPosts)
      setState(prev => ({...prev, userProfile, userPosts}))
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])

  //To render the list of user's posts
  const userPosts = state.userPosts.map((obj) => {

    return (
      <div className="user--post">
      <img src={obj.image_video_url} alt=""/>
      <p>{obj.description}</p>
      <span>{obj.created}</span>
      <div>
        <span><i class="bi bi-heart"></i></span>
        <span><i class="far fa-comment"></i></span>
      </div>
      </div>
    )
  })


  const handleFileInputChange= (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  return(
    <div>
       <section className="user--profile-section">
        <div className="user--flex-wrapper">
        <img className="user--profile-picture" src={state.userProfile.profile_picture_url} alt=""/>
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
    <section className="user--posts">
      {userPosts}
    </section>
    </div>
  );
}