// RENDERED ON USERSPAGE.JSX

import { Link } from "react-router-dom";

//CSS
import "./UserCard.css";


function UserCard(props) {
    
    const { user } = props;

    return (
        <>
            <div className="user-card">
                <Link to={`/users/${user.id}`}>
                <div className="user-image-container">
                    <img src={user.avatar} />
                </div>
                </Link>
                <div className="user-card-text">
                    <h3>{user.username}</h3>
                </div>
            </div>
        </>
    );
    }

    export default UserCard;