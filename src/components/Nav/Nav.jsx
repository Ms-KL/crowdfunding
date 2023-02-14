import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* Base url / origin / domain */}
            <Link to="/project">Project</Link>
            {/* Path parameter */}
        </nav>
    );
}

export default Nav;
