import Button from "react-bootstrap/Button";
export const HOME_PAGE = "Home";
export const PROFILE_PAGE = "Shop";
export const FAV_PAGE = "favourites";
export const CREATE_POST = "create_post";
export const LOGIN = "login";
export const REGISTER = "register";
export const ROUTER_MESSAGES = "router_messages";
export const EXPLORE_PAGE = "explore";

export default function NavItems(props) {
  return (
    <div className="navbar">
      <ul>
        <li
          onClick={() => {
            props.setPage(HOME_PAGE);
          }}
        >
          <i className="fas fa-home" />
        </li>
        <li
          onClick={() => {
            props.setPage(PROFILE_PAGE);
          }}
        >
          <i className="far fa-user-circle" />
        </li>
        <li
          onClick={() => {
            props.setPage(FAV_PAGE);
          }}
        >
          <i className="far fa-bookmark" />
        </li>
        <li
          onClick={() => {
            props.setPage(CREATE_POST);
          }}
        >
          <i className="far fa-plus-square"></i>
        </li>
        <li
          onClick={() => {
            props.setPage(ROUTER_MESSAGES);
          }}
        >
          <i className="far fa-comment-dots"></i>
        </li>
        <li
          onClick={() => {
            props.setPage(EXPLORE_PAGE);
          }}
        >
          Explore
        </li>
        {/* <li>{props.user.handle}</li> */}
        <li
          onClick={() => {
            props.logout();
          }}
        >
          <Button variant="outline-secondary">Logout</Button>{" "}
        </li>
      </ul>
    </div>
  );
}