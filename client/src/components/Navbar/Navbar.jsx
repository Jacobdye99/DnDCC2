import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar(props) {
  return (
    <div className="Top">
        <Link to={'/'} id="Logo" ><img src="https://github.com/Jacobdye99/DnDCC2/blob/main/Assets/dungeons-and-dragons-723167.png?raw=true" alt="DnD Logo" id="Logo" /><h3 className="CC">Character Creator</h3></Link>
        <Link to={'/Creator'} id="Creator" className="Links">Creator</Link>
        <Link to={'/Characters'} id='Character' className="Links">Characters</Link>
        {props.currentUser ? 
        <>
            <Link to={'/'} onClick={props.logout} className="navButton">Logout</Link>
            {props.currentUser.image !== "" ? 
            <Link to={`/user/${props.currentUser.id}`}>
                <img src={props.currentUser.image} alt={props.currentUser.username} className='NavImg'/>
            </Link>
            : 
            <Link to={`/user/${props.currentUser.id}`}> 
                <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt={props.currentUser.username} className='NavImg'/>
            </Link>
        }
        </>
        :
        <>
            <Link to='/login' id="Login" className="Links">Login</Link>
            <Link to='/register' id="Register"  className="Links">Register</Link>
        </>    
    }
    </div>
  )
}
