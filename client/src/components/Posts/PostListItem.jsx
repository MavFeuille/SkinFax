
export default function PostListItem(props) {
  return (
    <section className="post" key={obj.id}>
        <div className="info">
          <div className="user">
            <div>
              <img className="user-profile-pic"src={obj.profile_picture_url} alt="profile image"/>
            </div>
              <p className="username"> {obj.username}</p>
          </div>
        </div>
        <div className="post-content">
          <img className="post-image" src={obj.image_video_url} alt="" />
        </div>
        <div className="reaction-container">
          <i class="far fa-heart" onClick={() => console.log("Liked!")}></i>
          <i class="far fa-comment" onClick={() => console.log("Click to leave comment!")}></i>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("clicked fav");
              axios
                .post("/api/favourites/", {
                  id: props.user.id,
                  post_id: obj.id,
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }}
            >
            <button className="button-bookmark-icon" type="submit">
              <i class="far fa-bookmark"></i>
            </button>
          </form>
          {props.user.id === post_id &&
          <i class="far fa-trash-alt" onClick={() => console.log("Delete post clicked!")}></i>
          }
          </div>
        <div>
          <p>{obj.description}</p>
          <p>{obj.created}</p>
        </div>
    </section>
  );
}