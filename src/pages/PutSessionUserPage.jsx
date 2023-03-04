import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function PutSessionUserPage(props) {
    const sessionUserData = JSON.parse(window.localStorage.getItem("userData"));
    const authToken = window.localStorage.getItem("token")
    const [user, setUser] = useState({
        "username": "",
        "email": "",
        "password": "",
        "bio": "",
        "avatar": "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser((prevUser) => ({
        ...prevUser,
        [id]: value,
        }));
    };

    const defaultAvatar = window.location.origin + '/default_avatar.png';
    // process.env.PUBLIC_URL required me to go down rabbit hole.
        // this suggestion worked well for me: https://stackoverflow.com/a/54844591

    const handleSubmit = async (event) => {
        event.preventDefault();

        // remove avatar element from users list and place the rest in a temp list
        // create new users list. add the temp list to it 
        // set the avatar value to avatar or default and add to the new users list.
        // send this new list with the JSON for POST
        // reference: rest property - destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
        
        const { avatar, ...tempUsersNoAvatar } = user; //original list
        const updatedUsersWithAvatar = {
            ...tempUsersNoAvatar,
            avatar: avatar || defaultAvatar,
        }
        if (authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/${sessionUserData.id}/`,
                    {
                    method: "PATCH",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${authToken}`,
                },
                body: JSON.stringify ({ user: updatedUsersWithAvatar }),
                }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                console.log(user);
                // window.localStorage.removeItem("userData");
                navigate(`/users/session`);
            } catch (err) {
                // console.error(err);
                alert(`Error: ${err.message}`);
            }
        } else {
        navigate(`/`);
        }
        };
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Edit your details</h2>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                defaultValue={sessionUserData.username}
                placeholder="Enter unique username"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                defaultValue={sessionUserData.email}
                placeholder="Enter unique email"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="bio">Bio:</label>
            <input
                type="text"
                id="bio"
                defaultValue={sessionUserData.bio}
                placeholder="enter Bio"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="avatar">Avatar Image URL:</label>
            <input 
                type="text"
                id="avatar"
                defaultValue={sessionUserData.avatar}
                onChange={handleChange} 
            />
            </div>
            <button type="submit">Submit Changes</button>
        </form>
        </div>
    )
}

export default PutSessionUserPage;

// image render issue
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder