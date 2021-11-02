export default function FavouriteListItem(props) {
  return (
    <article className="user--favorite-article">
      <section>
        <img
          className="user-profile-pic"
          src={props.profilePictureUrl}
          alt=""
        />
        <span className="username">{props.username}</span>
        <br />
        <span>{props.created}</span>
      </section>
      <section className="user--favorite-section2">
        <img className="user--favorite-image" src={props.url} alt="" />
        <p className="user--favorite-desc">{props.description}</p>
        <button
          className="trash--button user--favorite-trash-button"
          type="button"
          onClick={props.deleteFavourite}
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </section>
    </article>
  );
}
