import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useNavigate, Link } from "react-router-dom";


function RegistrationPage(props) {
    const authToken = window.localStorage.getItem("token")
    const navigate = useNavigate();

    return (
        <>
            {!authToken ? ( 
                <>
                <h1>Welcome, Tree-Hugger!</h1>
                <p>Register now on the Communitree website to join us in making a real impact on the urban forest of our community through crowdfunding.</p>
                <RegistrationForm />;
                </>
            ) : 
            <>
            <h1>You are already logged in!</h1>
            <Link to="/">Go back to Home Page</Link>
            </>}
        </>
    );
}

export default RegistrationPage;