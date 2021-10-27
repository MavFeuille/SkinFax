import NavItems from "./NavItems"

export default function Header(props) {

  return (
    <header>
      <nav>
        <h1 className="logo">SkinFax</h1>
        <NavItems setPage={props.setPage} />
      </nav>
    </header>
  )
}