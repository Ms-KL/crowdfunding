import { Link } from "react-router-dom";

//CSS
// import "./PledgeCard.css";


function PledgeCard(props) {
    const { pledgeData } = props;

    return (
        <div className="pledge-card">
            <h3>
                ${pledgeData.amount} pledged to {pledgeData.project} @ {pledgeData.date_pledged}</h3>
            <p>{pledgeData.supporter} says: "{pledgeData.comment}"</p>
        </div>
    );
}



export default PledgeCard;

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