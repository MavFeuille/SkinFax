export default function FavouriteListItem(props) {
  return (
    <article>
      <section>
        <span>{props.username}</span>
        <br />
        <span>{props.created}</span>
      </section>
      <section>
        <img src={props.url} alt="" />
        <p>{props.description}</p>
        <button type="button" onClick={props.deleteFavourite}>
          <i class="fas fa-trash"></i>
        </button>
      </section>
    </article>
  );
}
