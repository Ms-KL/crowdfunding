import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Dummy Data
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProjectCommentForm from "../components/ProjectCommentForm/ProjectCommentForm";


function ProjectPage() {
    // State
    const [project, setProject] = useState({});

    // Hooks
    const { id } = useParams();

    // Effects
    // ---- ASYNC change
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`);
                const data = await response.json();
                setProject(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProject();
}, []);


    return (
        <div className="project-detail">
            <h2>{project.title}</h2>
            <h4>Started by Tree-Hugger: {project.owner}  </h4>
            <img src={project.image} />

            <br />
            <table>
                <tbody>
                    <tr>
                        <th>Start Date</th>
                        <th>Deadline</th>
                        <th>Status:</th>
                    </tr>
                    <tr>
                        <td>{new Date(project.date_created).toLocaleDateString()}</td>
                        <td>{new Date(project.deadline).toLocaleDateString()}</td>
                        <td>{project.is_open ? <p>Active</p> : <p>Inactive</p>}</td>
                    </tr>
                </tbody>
            </table>
            {/* <p>Project Started: {new Date(project.date_created).toLocaleDateString()} by {project.owner} </p>
            <p>Project Deadline: {project.deadline}</p> */}
            {/* <h3>{`Status: ${project.is_open}`}</h3> */}
            <p>-------------------------------</p>
            <div className="status-card">
                <h3>{project.funding_status} Project!</h3>
                <h4>Goal: ${project.goal} | Total Pledges: ${project.sum_pledges}</h4>
                <h4>Balance: ${project.goal_balance}</h4>
            </div>

            <p>-------------------------------</p>
            {/* if project comments exist, post them */}
            <ProjectCommentForm project={project} />
                <div>
                    <h3>Comments:</h3>
                    <ul>
                    {project.comments &&
                        project.comments.map((commentData, key) => (
                            <li key={key}>
                                {new Date(commentData.created).toLocaleString()}: 
                                <p>{commentData.commenter} says "{commentData.body}"</p>
                                
                            </li>
                        ))
                    }
                    </ul>
                </div>

            <p>-------------------------------</p>
            {/* if pledges exist, post them */}
            {/* passes project from project page into the pledge form. so can use as project in form */}
            <PledgeForm project={project} /> 
                <div>
                    <h3>Pledges:</h3>
                    <ul>
                        {project.pledges &&
                            project.pledges.map((pledgeData, key) => (
                                <li key={key}>
                                    {new Date(pledgeData.date_pledged).toLocaleString()}: 
                                    <p>${pledgeData.amount} from {pledgeData.supporter}</p>
                                    <p>{pledgeData.comment}</p>
                                </li>
                            ))}
                    </ul>
                </div>
        </div>
    );
}

export default ProjectPage;

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