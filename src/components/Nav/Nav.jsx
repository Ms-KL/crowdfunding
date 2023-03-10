import { Link } from "react-router-dom";

// CSS
import './Nav.css';

function Nav(props) {
    
    // ------- AUTH -------
    const { loggedIn, setLoggedIn } = props

    // ------- ACTIONS & EFFECTS -------

    const handleClick = () => {
        window.localStorage.removeItem("token");
        window.sessionStorage.removeItem("userData");
        setLoggedIn(false);

    }

    // ------- RENDER -------
    return (
            <nav>
                <div className="logo-container">
                    <img src= {window.location.origin + "/communitree__logo.png"} alt="Communitree Logo" className="logo-image" />
                </div>
                <div className="nav-container">
                        <div className="nav-control">
                        <Link to="/" className="button-link">
                            Home
                        </Link>
                        <Link to="/about" className="button-link">
                            About
                        </Link>

                        {loggedIn && (
                        <Link to="/create-project" className="button-link">
                            Create
                        </Link>
                        )}
                        <Link to="/projects" className="button-link">
                            Projects
                        </Link>
                        <Link to="/users" className="button-link">
                            Users
                        </Link>
                        <Link to="/contact" className="button-link">
                            Contact
                        </Link>
                        {loggedIn && (
                            <Link to="/users/session" className="button-link">
                            Profile
                            </Link>
                        )}
                        {!loggedIn && (
                            <Link to="/register" className="button-link">
                            Register
                            </Link>
                        )}
                        {!loggedIn && (
                            <Link to="/login" className="button-link">
                            Login
                            </Link>
                            
                        )}
                        </div>
                        <div id="logout-container">
                            {loggedIn && (
                                <button id="logout-button" onClick={handleClick} className="button">
                                Log Out
                                </button>
                        )}
                        </div>
                </div>
            </nav>
        );

}
export default Nav;