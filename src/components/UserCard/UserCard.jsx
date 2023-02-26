import { Link } from "react-router-dom";
//CSS
import "./UserCard.css";

function UserCard(props) {
    const { user } = props;

    return (
            <div className="user-card">
                <img src={user.avatar} />
                <h3>Bio: {user.bio}</h3>
                <p>-------------------------------</p>
                    <div>
                        <h3>{user.username}'s Projects:</h3>
                        <ul>
                        {user.projects &&
                            user.projects.map((projectData, key) => (
                                <li key={key}>
                                {new Date(projectData.date_created).toLocaleDateString()}: {projectData.title} 
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                <p>-------------------------------</p>
                    <div>
                        <h3>{user.username} Comment Feed:</h3>
                        <ul>
                        {user.comments &&
                            user.comments.map((commentData, key) => (
                                <li key={key}>
                                {new Date(commentData.created).toLocaleDateString()}: {commentData.project}: says {commentData.body}
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                <p>-------------------------------</p>
                    <div>
                        <h3>{user.username} Pledges Feed:</h3>
                        <ul>
                            {user.pledges &&
                                user.pledges.map((pledgeData, key) => (
                                    <li key={key}>
                                        {pledgeData.date_pledged}: ${pledgeData.amount} for {pledgeData.project}
                                        <p>{pledgeData.comment}</p>
                                    </li>
                                ))}
                        </ul>
                    </div>
            </div>
        );
}

export default UserCard;
