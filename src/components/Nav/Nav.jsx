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

/// image render issue
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder