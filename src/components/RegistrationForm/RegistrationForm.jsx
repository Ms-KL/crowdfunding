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

    const defaultAvatarUrl = window.location.origin + '/communitree_image.png';
    // public folder not auto working, had to point to root

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!authToken) {
            // adding avatar if not submitted on registration
            // based on project handle change structure
            // if (!users.avatar) {
            //     // const { avatar, defaultAvatarUrl } = event.target;
            //     setUsers((prevUsers) => ({
            //     ...prevUsers,
            //     avatar: defaultAvatarUrl,
            //     }));
            // }

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
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                console.log(users);
                navigate(`/login`);
            } catch (err) {
                // console.error(err);
                alert(`Error: ${err.message}`);
            }
        } else {
        // redirect to login page
        navigate(`/`);
        }
        };
    

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

// image render issue
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder