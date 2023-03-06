// RENDERED ON PROJECTPAGE.JSX + USERPROFILE.JSX

//CSS
import "./CommentCard.css";

function CommentCard(props) {
    const { comment, user } = props;

    return (
        <>
            <div className="comment-card">
                <div className="avatar-container">
                        {!user && comment.commenter_avatar && <img src={comment.commenter_avatar} alt="avatar" />}
                    </div>
                {/* </Link> */}
                <div className="comment-card-text">
                    <h3>{!user && comment.commenter}</h3>            
                    <p>"{comment.body}"</p>
                    {user &&
                        <p>{comment.project}</p>
                    }
                    <p>{new Date(comment.created).toLocaleDateString()}</p>
                </div>
            </div>
        </>
    );
}

export default CommentCard;


