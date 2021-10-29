import NavItems from "./NavItems";

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
