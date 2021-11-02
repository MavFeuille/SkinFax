import NavItems from "./NavItems";
import { HOME_PAGE } from "./NavItems";
import DirectMessages from "./DirectMessagesComp/DirectMessagesComp";
import Join from "./Join";
import { BrowserRouter as Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <nav>
        <h1
          className="logo"
          onClick={() => {
            props.setPage(HOME_PAGE);
          }}
        >
          Skinfax
        </h1>
        <NavItems
          setPage={props.setPage}
          user={props.user}
          logout={props.logout}
        />
        {/* <Link to="/DirectMessages"> direct msg </Link>
        <Link to="/Join"> Join  </Link> */}
      </nav>
    </header>
  );
}
