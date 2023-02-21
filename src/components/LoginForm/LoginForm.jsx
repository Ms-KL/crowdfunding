import React, { useState } from "react";

function LoginForm() {

    // state to store username and password:
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
        const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    // handle form submission:
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
        fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }).then((response) => {
        console.log(response.json());
        });
        }
    };
        
    return (
        <form>
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
        <button type="submit" onClick={handleSubmit}>
            Login
        </button>
        </form>
    );
    }

export default LoginForm;


// Upto Page 4 in https://shecodes.thinkific.com/courses/take/she-codes-plus-perth-22-23/pdfs/38847847-crowdfunding-app-posting-data-to-the-api