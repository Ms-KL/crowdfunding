import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function PutSessionUserPage() {

    // --------------- STATE 

    // STEP 1: retrieve only the required items from session storage
    const { id, username, email, bio, avatar } = JSON.parse(window.sessionStorage.getItem("userData"));
        
    // STEP 2: retrieve the token to sent with Fetch request
    const authToken = window.localStorage.getItem("token")
        
    // STEP 3: set user's State using the retrieved session storage values
    const [user, setUser] = useState({
        "id": id,
        "username": username,
        "email": email,
        "bio": bio,
        "avatar": avatar,
    });
        
    const navigate = useNavigate();

    // --------------- ACTIONS 

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
Failed / unfinished:

    NOTES on SESSION STORAGE:
        Added user details into Session Storage
        as they navigate away from the edit page or the users/session page, the session storage data deletes
        I know not an ideal solution. Context would be better. Will polish in future

    Trying to delete storage when navigating away from session and session/edit pages:
        useEffect (() => {
            if(!window.location.href.includes('users/session/')) {
                localStorage.removeItem("userData")
            }});
        
        useEffect(() => {
            const userData = window.sessionStorage.getItem("userData");
                if (!userData) {
                    navigate("/users/session");
                }
            }, []);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    // https://www.w3schools.com/jsref/jsref_includes.asp
    // https://www.w3schools.com/JS/js_window_location.asp?output=printhttp://www.w3schools.com/JS/js_window_location.asp?output=print
*/

/* References:
        image render issue
            https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder

        react form structure reference:
            https://reactjs.org/docs/forms.html
            https://beta.reactjs.org/reference/react-dom/components/input

        use effect: triggers AFTER first render

        Local Storage:
            use this to remove local storage data... only need it for FIRST render
            https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js/7209016-trigger-effects-with-useeffect#:~:text=The%20hook%20useEffect%20is%20called,time%20your%20component%20is%20rendered.

            Local Storage (get and delete)
            freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items
            https://blog.logrocket.com/localstorage-javascript-complete-guide/
            https://stackoverflow.com/questions/64093100/react-remove-localstorage-item-on-page-load
            https://blog.logrocket.com/using-localstorage-react-hooks/
*/