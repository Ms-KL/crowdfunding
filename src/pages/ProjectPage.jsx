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
            const res = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`);
            const data = await res.json();
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
            <img src={project.image} />
            <h3>Created at: {project.date_created}</h3>
            <h3>Owner: {project.owner}</h3>
            <h3>Project Deadline: {project.deadline}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <p>-------------------------------</p>
            <h3>Funding Status: {project.funding_status}</h3>
            <h3>Goal: ${project.goal}</h3>
            <h3>Total Pledges: ${project.sum_pledges}</h3>
            <h3>Goal Balance: ${project.goal_balance}</h3>

            <p>-------------------------------</p>
            {/* if project comments exist, post them */}
            <ProjectCommentForm />
                <div>
                    <h3>Comments:</h3>
                    <ul>
                    {project.comments &&
                        project.comments.map((commentData, key) => (
                            <li key={key}>
                            {commentData.created}: {commentData.commenter} says {commentData.body}
                            </li>
                        ))
                    }
                    </ul>
                </div>

            <p>-------------------------------</p>
            {/* if pledges exist, post them */}
            <PledgeForm />
                <div>
                    <h3>Pledges:</h3>
                    <ul>
                        {project.pledges &&
                            project.pledges.map((pledgeData, key) => (
                                <li key={key}>
                                    {pledgeData.amount} from {pledgeData.supporter}
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