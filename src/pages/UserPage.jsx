import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Dummy Data
// import { oneProject } from "../data";

// Components
import UserCard from "../components/UserCard/UserCard";
import AdminBlock from "../components/AdminBlock/AdminBlock";

function UserPage() {
    // State
    const [user, setUser] = useState({});
    // Hooks
    const { id } = useParams();
    // enables redirect
    const navigate = useNavigate();

    // Effects
    // ---- ASYNC change
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);

    const isUser = () => {
        return user.id;
    };

    return (
        <div id="user-block">
            {user.id && (
                <>
                <h1>{user.username}'s Profile</h1>
                <UserCard user={user}/>
                </>
            )}
            {!user.id && (
                <>
                <h1>Sorry, No Tree-Huggers here!</h1>
                </>
            )}
        </div>
    );
}

export default UserPage;

{/* <p className="kl-to-do">Add comments: w/ avatar (usermodel),</p>
<p className="kl-to-do">Avatar next to pledge item? part of diff model (users) how to call?</p>
<p className="kl-to-do">Will I need to change db scheme to FK avatar to be accessible to pledge and comment?</p>  */}





// Ctrl + D = select all the same fields
// Alt to ASYNC change:
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
    //     .then(results => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //         setProject(data);
    //     });

    // }, []);

//     return (
//         <div className="user-detail">
//             <h2>{user.username}</h2>
//             <img src={user.avatar} />
//             <h3>Bio: {user.bio}</h3>
//             <p>-------------------------------</p>
//                 <div>
//                     <h3>{user.username}'s Projects:</h3>
//                     <ul>
//                     {user.projects &&
//                         user.projects.map((projectData, key) => (
//                             <li key={key}>
//                             {projectData.title} - {projectData.date_created}
//                             </li>
//                         ))
//                     }
//                     </ul>
//                 </div>

//             <p>-------------------------------</p>
//                 <div>
//                     <h3>{user.username} Comment Feed:</h3>
//                     <ul>
//                     {user.comments &&
//                         user.comments.map((commentData, key) => (
//                             <li key={key}>
//                             {commentData.created} - {commentData.project}: says {commentData.body}
//                             </li>
//                         ))
//                     }
//                     </ul>
//                 </div>

//             <p>-------------------------------</p>
//                 <div>
//                     <h3>{user.username} Pledges Feed:</h3>
//                     <ul>
//                         {user.pledges &&
//                             user.pledges.map((pledgeData, key) => (
//                                 <li key={key}>
//                                     {pledgeData.date_pledged}: ${pledgeData.amount} for {pledgeData.project}
//                                     <p>{pledgeData.comment}</p>
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//         </div>
//     );
// }