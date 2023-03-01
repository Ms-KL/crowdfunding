import { Link } from "react-router-dom";

//CSS
import "./CommentCard.css";


function CommentCard(props) {
    const { comment } = props;


    return (
        <>
            <div className="comment-card">
                <div className="avatar-container">
                        {comment.commenter_avatar && <img src={comment.commenter_avatar} alt="avatar" />}
                    </div>
                {/* </Link> */}
                <div className="comment-card-text">
                    <h3>{comment.commenter}</h3>            
                    <p>{new Date(comment.created).toLocaleString()}</p>
                    <p>"{comment.body}"</p>
                </div>
            </div>
        </>
    );
}

export default CommentCard;

// MAP ISSUE:
// https://stackoverflow.com/questions/71135587/react-js-typeerror-cannot-read-properties-of-undefined-reading-map
// https://java2blog.com/typeerror-map-is-not-function-javascript/


