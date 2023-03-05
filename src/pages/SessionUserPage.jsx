import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// components
import UserProfile from "../components/UserProfile/UserProfile";
import AdminBlock from "../components/AdminBlock/AdminBlock";

function SessionUserPage() {
    const authToken = window.localStorage.getItem("token")

    // State
    const [user, setUser] = useState({});

    // Effects
    // ---- ASYNC change
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

    const isAdmin = () => {
        return user.id === 1;
    };

    return (
            <div>
                {isAdmin() && (
                    <>
                        <AdminBlock />
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
                <UserProfile user={user}/>
                </div>
            </div>
        );
    }

export default SessionUserPage;