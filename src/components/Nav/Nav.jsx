import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token");
        setLoggedIn(false);
    };

    return (
        <nav>
            <div>
                {!loggedIn && <Link to="/login" className="btn">Login</Link>}
                {!loggedIn && <Link to="/register" className="btn">Register</Link>}
                {loggedIn && <button onClick={handleClick}>Log Out</button>}
                <div id="nav-controls">
                    <Link to="/" >Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            
        </nav>
    );
}
export default Nav;