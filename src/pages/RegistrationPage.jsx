import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useNavigate, Link } from "react-router-dom";


function RegistrationPage(props) {
    const authToken = window.localStorage.getItem("token")
    const navigate = useNavigate();

    return (
        <>
            {!authToken ? ( 
                <>
                <h1>Join our Communitree of Tree-Huggers</h1>
                <p>Register now to join us in making a real impact on the urban forest of our community.</p>
                <RegistrationForm />
                </>
            ) : 
            <>
            <h1>Welcome Tree-Hugger!</h1>
            <Link to="/projects">Start exploring our Communitree of Projects</Link>
            </>}
        </>
    )
}

export default RegistrationPage;