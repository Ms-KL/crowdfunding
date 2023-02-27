import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import '/src/App.css'


function LoginForm() {

    // state 
    const [, setLoggedIn] = useOutletContext();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    // HOOKS
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        // grab the id and value from target
        // every time the input changes it calls this function
        // event.target: get the target of input.
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        // [id] = overrides
    };

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            if(token !== undefined) {
                window.localStorage.setItem("token", token);
                setLoggedIn(true);
                navigate(-1);

            } else {
                setLoggedIn(false);
                const response = await postData();
                alert(JSON.stringify(response));
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome back</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default LoginForm;
