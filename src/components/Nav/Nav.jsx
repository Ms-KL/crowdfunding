import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Nav.css';

function Nav(props) {
    const { loggedIn, setLoggedIn } = props

    const handleClick = () => {
        window.localStorage.removeItem("token");
        setLoggedIn(false);

    }

    return (
            <nav>
                <div className="logo-container">
                    <img src="communitree__logo.png" alt="Communitree Logo" className="logo-image" />
                </div>
                <div className="nav-container">
                        <div className="nav-control">
                        <Link to="/" className="button-link">
                            Home
                        </Link>
                        <Link to="/about" className="button-link">
                            About
                        </Link>
                        <Link to="/contact" className="button-link">
                            Contact
                        </Link>
                    {/* </div> */}
                    {/* <div className="nav-user"> */}
                        {loggedIn && (
                            <Link to="/user/session" className="button-link">
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
                    {/* </div> */}
                </div>
            </nav>
        );

}
export default Nav;