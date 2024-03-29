import { Outlet, Link } from "react-router-dom";
import{
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
} from '../../firebase.js'


const Navigation = () => {

  return (
    <>
      <nav id="nav-bar">
        <h1 id="logo">PantryPlunder</h1>
        <ul id="link-bar">
          <li  className="link-item">
            <Link to="/pantry">Pantry</Link>
          </li>
          <li  className="link-item">
            <Link to="/savedrecipe">Saved Recipes</Link>
          </li>
        </ul>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;