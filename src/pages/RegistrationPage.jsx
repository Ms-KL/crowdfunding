import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";


function RegistrationPage() {

    // if token exists, don't show registration form
    const authToken = window.localStorage.getItem("token")

    return (
        <>
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