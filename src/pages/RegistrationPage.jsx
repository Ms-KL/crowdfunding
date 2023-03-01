import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useNavigate, Link } from "react-router-dom";


function RegistrationPage(props) {
    const authToken = window.localStorage.getItem("token")
    const navigate = useNavigate();

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