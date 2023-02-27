import { useState, useEffect } from "react";

// components
import UserCard from "../components/UserCard/UserCard";
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
                    `${import.meta.env.VITE_API_URL}users/session`, 
                    {
                    method: "get",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                    }
                    });
                const data = await response.json();
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
                        <UserCard user={user}/>
                    </>
                    )}
                <div id="user-block">
                    {user.id > 1 && !isAdmin() && (
                        <>
                        <h1>Welcome back {user.username}!</h1>
                        <UserCard user={user}/>
                        </>
                    )}
                    {!user.id && (
                        <>
                        <h1>Login to view your profile</h1>
                        </>
                    )}
                </div>
            </div>
        );
    }

export default SessionUserPage;