import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function RegistrationForm() {
    const authToken = window.localStorage.getItem("token")
    const [users, setUsers] = useState({
        "username": "",
        "email": "",
        "password": "",
        "bio": "",
        "avatar": "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUsers((prevUsers) => ({
        ...prevUsers,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
                }
            );
            navigate(`/login`);
        } catch (err) {
            console.error(err);
        }
    } else {
    // redirect to login page
    navigate(`/`);
    }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter unique username"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Enter unique email"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="text"
                id="password"
                placeholder="Enter password"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="bio">Bio:</label>
            <input
                type="text"
                id="bio"
                placeholder="enter Bio"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="avatar">Avatar Image URL:</label>
            <input 
                type="text"
                id="avatar" 
                onChange={handleChange} 
            />
            </div>
            <button type="submit">Register User</button>
        </form>
        </div>
    );
}

export default RegistrationForm;
