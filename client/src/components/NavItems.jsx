export const HOME_PAGE = 'Home';
export const PROFILE_PAGE = 'Shop';
export const FAV_PAGE = 'favourites';
export const CREATE_POST = 'create_post';
export const LOGIN = 'login';
export const REGISTER = 'register';
export const ROUTER_MESSAGES = 'router_messages';

export default function NavItems(props) {
  return (
    <ul>
      <li
        onClick={() => {
          props.setPage(HOME_PAGE);
        }}
      >
        <i class="fas fa-home" />
      </li>
      <li
        onClick={() => {
          props.setPage(PROFILE_PAGE);
        }}
      >
        <i class="far fa-user-circle" />
      </li>
      <li
        onClick={() => {
          props.setPage(FAV_PAGE);
        }}
      >
        <i class="far fa-bookmark" />
      </li>
      <li
        onClick={() => {
          props.setPage(CREATE_POST);
        }}
      >
        create post
      </li>
      <li>{props.user.email}</li>

      <li onClick={() => {props.setPage(ROUTER_MESSAGES)}}>Join Messages</li>

      <li onClick={() => {props.logout()}}>
        Logout
      </li>
    </ul>
  );
}
