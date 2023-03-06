// RENDERED ON REGISTRATIONPAGE.JSX

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    
    // ------- AUTH -------
    const authToken = window.localStorage.getItem("token")

    // ------- STATE -------
    const [users, setUsers] = useState({
        "username": "",
        "email": "",
        "password": "",
        "bio": "",
        "avatar": "",
    });

    // ------- HOOKS -------
    const navigate = useNavigate();

    // ------- ACTIONS & EFFECTS -------
    const handleChange = (event) => {
        const { id, value } = event.target;
        setUsers((prevUsers) => ({
        ...prevUsers,
        [id]: value,
        }));
    };

    const defaultAvatar = window.location.origin + '/default_avatar.png';

    const handleSubmit = async (event) => {
        event.preventDefault();

        // replace blank avatar value with default
        const { avatar, ...tempUsersNoAvatar } = users; //original list
        const updatedUsersWithAvatar = {
            ...tempUsersNoAvatar,
            avatar: avatar || defaultAvatar,
        }
        /* 
            * remove avatar element from users list and place the rest in a temp list
            * create new users list. add the temp list to it 
            * set the avatar value to avatar or default and add to the new users list.
            * send this new list with the JSON for POST
        * */

        if (!authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUsersWithAvatar),
                }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                navigate(`/login`);
            } catch (err) {
                alert(`Error: ${err.message}`);
            }
        } else {
        navigate(`/`);
        }
        };
    
    // ------- RENDER -------
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Become a Tree-Hugger</h2>
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
    )
}

export default RegistrationForm;


/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes
*/
