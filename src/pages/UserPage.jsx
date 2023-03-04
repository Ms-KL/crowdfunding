import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Components
import UserProfile from "../components/UserProfile/UserProfile";

function UserPage() {

    // State
    const [user, setUser] = useState({});

    // Hooks
    const { id } = useParams();

    // Effects
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users/${id}/`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);

    return (
        <div id="user-block">
            {user.id && (
                <>
                <h1>{user.username}'s Profile</h1>
                <UserProfile user={user}/>
                </>
            )}
            {!user.id && (
                <>
                <h1>Oh No! <br/> <br/>We couldn't find this Tree-Hugger!</h1>
                <p>Visit our Communitree Tree-Huggers page to locate one.</p>
                </>
            )}
        </div>
    );
}

export default UserPage;