import NavItems from "./NavItems";
import DirectMessages from './DirectMessagesComp/DirectMessagesComp';
import Join from './Join';
import {BrowserRouter as Link} from 'react-router-dom';


export default function Header(props) {
  return (
    <header>
      <nav>
        <h1 className="logo">Skinfax</h1>
        <NavItems
          setPage={props.setPage}
          user={props.user}
          logout={props.logout}
        />
      
      </nav>
    </header>
  );
}
