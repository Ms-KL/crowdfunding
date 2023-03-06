import { useNavigate } from "react-router-dom";
import { useState } from "react";


function PutSessionUserPage() {

    // ------- STORAGE -------
    // STEP 1: retrieve only the required items from session storage
    const { id, username, email, bio, avatar } = JSON.parse(window.sessionStorage.getItem("userData"));
        
    // ------- AUTH  -------
    // STEP 2: retrieve the token to sent with Fetch request
    const authToken = window.localStorage.getItem("token")

    // ------- STATE -------
    // STEP 3: set user's State using the retrieved session storage values
    const [user, setUser] = useState({
        "id": id,
        "username": username,
        "email": email,
        "bio": bio,
        "avatar": avatar,
    });

    // ------- HOOKS -------
    const navigate = useNavigate();

    // ------- ACTIONS & EFFECTS -------
    // STEP 4: user inputs data change
    const handleChange = (event) => {
        /*  
        Step 4: User inputs data change -> 
            As data is input, the state of the user is changed immediately with the input ->
            Previous state is compared with new user input -> 
            setUser is updated with the changes (also retains unchanged values in user) ->
        NOTE: this is in preparation for the handleSubmit --> 
            when handleSubmit is pressed, these new changes will flow into the object updatedUser ->
            updatedUser is then sent with the Fetch request 
        */

        // Extracts the id and value (eg: "bio": "I like banana") of the input field that triggered the event.
        const { id, value } = event.target;
        setUser((prevUser) => ({
        ...prevUser,
        [id]: value,
        }));
            
    };   

    // https://stackoverflow.com/a/54844591
    const defaultAvatar = window.location.origin + '/default_avatar.png';
        

    // STEP 5: after user presses submit
    const handleSubmit = async (event) => {
        
        // prevents refresh of page (default action of submit)
        event.preventDefault();

        // STEP 6: create updated user object 
        const updatedUser = {
            id: user.id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            avatar: user.avatar || defaultAvatar,
        };
            /* 
            STEP 6: creates updated user object --> 
                sets values with changed values from handleChange (step 4)
            NOTE: if avatar doesn't exist (if user clears this field), set to default image
            */

        // STEP 7: if user is logged in, continue, else throw error
        if (authToken) {

            // STEP 8: send PUT request using FETCH to logged in user profile.
                // payload to send: updatedUser (object step 6, new data from step 4)
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/session/`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${authToken}`,
                        },
                        body: JSON.stringify (updatedUser),
                    }
                );

                // STEP 9 : if request not successful, throw error, else, update session storage with updatedUser values
                if (!response.ok) {
                    throw new Error(await response.text());
                }

                // ---- Cleanup
                window.sessionStorage.removeItem("userData");

                // Updates setUser to the updatedUser (new values)
                setUser(updatedUser);

                // Redirect to user page (not session user)
                navigate(`/users/${id}/`);

            } catch (err) {
                alert(`Error: ${err.message}`);
            }
        } else {
        window.sessionStorage.removeItem("userData");
        navigate(`/`);
        }
        };

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Edit your details</h2>
        {/* defaultValue = prefill with session storage values for easy updating of details. HandleChange will watch for differences */}
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                defaultValue={username}
                placeholder="Enter unique username"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                defaultValue={email}
                placeholder="Enter unique email"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="bio">Bio:</label>
            <input
                type="text"
                id="bio"
                defaultValue={bio}
                placeholder="enter Bio"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="avatar">Avatar Image URL:</label>
            <input 
                type="text"
                id="avatar"
                defaultValue={avatar}
                onChange={handleChange} 
            />
            </div>
            <button type="submit">Submit Changes</button>
        </form>
        </div>
    )
}

export default PutSessionUserPage;

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes 
*/