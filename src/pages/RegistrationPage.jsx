import { Link } from "react-router-dom";

// ------- COMPONENTS -------
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";


function RegistrationPage() {

    // ------- AUTH -------
    const authToken = window.localStorage.getItem("token")

    // ------- RENDER -------
    return (
        <>
        {/* -- REGISTRATION FORM -- */}
            {!authToken ? ( 
                <RegistrationForm />
            ) : 
            <>
            <h1>Welcome Tree-Hugger!</h1>
            <Link to="/projects">Start exploring our Communitree of Projects</Link>
            </>}
        </>
    )
}

export default RegistrationPage;