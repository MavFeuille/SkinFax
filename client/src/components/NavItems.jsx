export const HOME_PAGE = "Home"
export const PROFILE_PAGE = "Shop"
export const FAV_PAGE = "favourites"

export default function NavItems(props) {

  return (
    <ul>
      <li onClick={() => { props.setPage(HOME_PAGE) }}><i class="fas fa-home"></i></li>
      <li onClick={() => { props.setPage(PROFILE_PAGE) }}><i class="far fa-user-circle"></i></li>
      <li onClick={() => { props.setPage(FAV_PAGE) }}><i class="far fa-bookmark"></i></li>
    </ul>
  )
}