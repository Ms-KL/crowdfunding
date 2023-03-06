// RENDERED ON USERPAGE.JSX AND SESSIONUSERPAGE.JSX

//CSS
import "./UserProfile.css";

// ------- COMPONENTS -------
import PledgeCard from "../PledgeCard/PledgeCard";
import CommentCard from "../CommentCard/CommentCard";
import ProjectCard from "../ProjectCard/ProjectCard";

function UserProfile(props) {
    const { user } = props;

    return (
        <>
            <div className="user-profile">
                <img src={user.avatar} />
                <p className="feature-text">"{user.bio}"</p>
        
    {/* -- PROJECT CARD -- */}
            <div>
                <br />
                    <h2>Projects:</h2>
                <div className="card-list">
                        {user.projects && user.projects.length > 0 ? (
                            user.projects.map((projectData, key) => {
                                return <ProjectCard key={key} projectData={projectData} user={user} />;
                                })
                        ) : (
                            <p>{user.username} hasn't started any projects</p>
                        )}
                    </div>
            </div>

    {/* -- COMMENT CARD -- */}
                <div>
                    <br />
                    <h2>Comments:</h2>
                        <div className="card-list">
                            {user.comments && user.comments.length > 0 ? (
                                user.comments.map((comment, key) => {
                                    return <CommentCard key={key} user={user} comment={comment} />
                                })
                            ) : (
                                <p>{user.username} hasn't made any comments</p>
                            )}
                        </div>
                </div>

    {/* -- PLEDGE CARD -- */}
                <div>
                    <h2>Pledges:</h2>
                    <div className="card-list">
                        {user.pledges && user.pledges.length > 0 ? (user.pledges.map((pledge, key) => {
                                return <PledgeCard key={key} pledge={pledge} user={user} />
                            })
                        ) : (
                            <p>{user.username} hasn't pledged to any projects</p>
                        )}
                    </div>
                </div>
        </div>
        </>
        );
}

export default UserProfile;

