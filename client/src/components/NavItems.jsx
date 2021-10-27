export const HOME_PAGE = "Home"
export const PROFILE_PAGE = "Shop"
export const FAV_PAGE = "favourites"

export default function NavItems(props) {

  return (
    <ul>
      <li onClick={() => { props.setPage(HOME_PAGE) }}>Home</li>
      <li onClick={() => { props.setPage(PROFILE_PAGE) }}>Profile</li>
      <li onClick={() => { props.setPage(FAV_PAGE) }}>favourites</li>
    </ul>
  )
}