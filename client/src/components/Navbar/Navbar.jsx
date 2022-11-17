import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className="Top">
        <Link to={'/'} id="Logo" ><img src="https://github.com/Jacobdye99/DnDCC2/blob/main/Assets/dungeons-and-dragons-723167.png?raw=true" alt="DnD Logo" id="Logo" /><h3 className="CC">Character Creator</h3></Link>
        <Link to={'/Creator'} id="Creator" className="Links">Creator</Link>
        <Link to={'/Characters'} id='Character' className="Links">Characters</Link>
        <Link to={'/Login'} id="Login" className="Links">Login</Link>
        <Link to={'/Register'} id="Register" className="Links">Register</Link>
    </div>
  )
}
