import { Link } from "react-router-dom";
import './Nav.css'

function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }


function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            {/* Base url / origin / domain */}
            {/* <Link to="/project">Project</Link> */}
            {/* Path parameter */}
        </nav>
    );
}

return (
    <nav>
        <div id="nav-right">
            {!loggedIn && <Link to="/login" className="btn">Login In</Link>}
            <div id="nav-controls">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        {loggedIn && <button onClick={handleClick}>Sign Out</button>}
    </nav>
);
}
export default Nav;