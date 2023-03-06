import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ------- COMPONENTS -------
import UserProfile from "../components/UserProfile/UserProfile";
import AdminBlock from "../components/AdminBlock/AdminBlock";

function SessionUserPage() {

    // ------- AUTH -------
    const authToken = window.localStorage.getItem("token")

    // ------- STATE -------
    const [user, setUser] = useState({});

    // ------- ACTIONS & EFFECTS -------

    // FETCH (GET) session user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/session/`, 
                    {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                    }
                    });
                const data = await response.json();
                window.sessionStorage.setItem("userData", JSON.stringify(data));
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [authToken]);

    // If user ID is 1, then they are admin
    const isAdmin = () => {
        return user.id === 1;
    };

    // ------- RENDER -------

    return (
            <div>
                {isAdmin() && (
                    <>
                        {/* -- ADMIN BLOCK -- */}
                        <AdminBlock />
                        <Link to="/users/session/edit" className="button-link">
                Edit</Link>
                    </>
                    )}
                <div id="user-block">
                    {user.id > 1 && !isAdmin() && (
                        <>
                        <h1>Welcome back {user.username}!</h1>
                        <Link to="/users/session/edit" className="button-link">
                Edit</Link>
                        </>
                    )}
                    {!user.id && (
                        <>
                        <h1>Login to view your profile</h1>
                        </>
                    )}
                {/* -- USER PROFILE -- */}
                {user.id && (
                    <UserProfile user={user}/>
                )}
                </div>
            </div>
        );
    }

export default SessionUserPage;