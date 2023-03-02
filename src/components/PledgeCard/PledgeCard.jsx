import { Link } from "react-router-dom";

//CSS
import "./PledgeCard.css";


function PledgeCard(props) {
    const { pledge, user } = props;


    return (
        <>
            <div className="pledge-card">
                {/* <Link to={`/user/${supporterID}`}> */}
                <div className="avatar-container">
                    
                 {/* {pledge.anonymous && } */}
                    {!user && !pledge.anonymous && (pledge.supporter_avatar && <img src={pledge.supporter_avatar} alt="avatar" />)}
                    {!user && pledge.anonymous && (pledge.supporter_avatar && <img src="https://images.pexels.com/photos/6505027/pexels-photo-6505027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />)}
                </div>
                {/* </Link> */}
                <div className="pledge-card-text">
                    <h3>{!user && pledge.supporter}</h3>
                    <p id="pledgeAmount">${pledge.amount}</p>
                    <p>"{pledge.comment}"</p>  
                    {user &&
                    <p>{pledge.project}</p>
                    }
                    <p id="pledgeDate">{new Date(pledge.date_pledged).toLocaleDateString()} </p>          
                    

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