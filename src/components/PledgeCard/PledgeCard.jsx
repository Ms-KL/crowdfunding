import { Link } from "react-router-dom";

//CSS
import "./PledgeCard.css";


function PledgeCard(props) {
    const { pledgeData } = props;


    return (
        <>
            <div className="pledge-card">
                {/* <Link to={`/user/${supporterID}`}> */}
                    <div className="user-image-container">
                        {pledgeData.supporter_avatar && <img src={pledgeData.supporter_avatar} alt="avatar" />}
                    </div>
                {/* </Link> */}
                <div className="user-card-text">
                    <h3>{pledgeData.supporter}</h3>            
                    <p>${pledgeData.amount} pledged to {pledgeData.project} @ {pledgeData.date_pledged}</p>
                    <p>"{pledgeData.comment}"</p>
                </div>
            </div>
        </>
    );
}


export default PledgeCard;

// MAP ISSUE:
// https://stackoverflow.com/questions/71135587/react-js-typeerror-cannot-read-properties-of-undefined-reading-map
// https://java2blog.com/typeerror-map-is-not-function-javascript/




// Trying to create direct link to project. Not working. Code below:

// function PledgeCard(props) {
//     const { pledgeData, projectData } = props;

//     function getProjectLink() {
//         if (projectData) {
//             return `/project/${projectData.id}`;
//         } else {
//             return "";
//         }
//     }

//     return (
//         <div className="pledge-card">
//             <h3>
//                 ${pledgeData.amount} pledged to <Link to={getProjectLink()}>{pledgeData.project}</Link> @ {pledgeData.date_pledged}</h3>
//             <p>{pledgeData.supporter} says: "{pledgeData.comment}"</p>
//         </div>
//     );
// }