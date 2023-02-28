import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//CSS
import "./UserProfile.css";

function UserProfile(props) {
    const { user } = props;


    return (
            <div className="user-profile">
                <img src={user.avatar} />
                <h3>{user.bio}</h3>
        
                <p>-------------------------------</p>
                    <div>
                        <h3>Projects:</h3>                           
                            {user.projects && user.projects.length > 0 ? (
                                <ul>
                                {user.projects.map((projectData, key) => (
                                    
                                <li key={key}>
                                {new Date(projectData.date_created).toLocaleDateString()}: {projectData.title} 
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Make your first Project</p>
                    )}
                </div>

                <p>-------------------------------</p>
                    <div>
                        <h3>Comments:</h3>
                        {user.comments && user.pledges.length > 0 ? (
                        <ul>
                            {user.comments.map((commentData, key) => (

                                <li key={key}>
                                {new Date(commentData.created).toLocaleDateString()}: {commentData.project}: says {commentData.body}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Make your first comment</p>
                    )}
                </div>

                <p>-------------------------------</p>
                <div>
                    <h3>Pledges:</h3>
                    {user.pledges && user.pledges.length > 0 ? (
                        <ul>
                            {user.pledges.map((pledgeData, key) => (
                                <li key={key}>
                                    {pledgeData.date_pledged}: ${pledgeData.amount} for {pledgeData.project}
                                    {pledgeData.comment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Make your first pledge</p>
                    )}
                </div>

            </div>
        );
}

export default UserProfile;
