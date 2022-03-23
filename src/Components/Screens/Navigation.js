import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav id="nav-bar">
        <h1 id="logo">PantryPlunder</h1>
        <ul id="link-bar">
          <li className="link-item">
            <Link to="/">Login</Link>
          </li>
          <li  className="link-item">
            <Link to="/signup">SignUp</Link>
          </li>
          <li  className="link-item">
            <Link to="/pantry">Pantry</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;