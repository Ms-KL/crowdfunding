import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* Base url / origin / domain */}
            {/* <Link to="/project">Project</Link> */}
            {/* Path parameter */}
        </nav>
    );
}

export default Nav;
