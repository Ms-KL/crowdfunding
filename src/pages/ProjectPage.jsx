import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Dummy Data
import { oneProject } from "../data";

function ProjectPage() {
    // State
    const [project, setProject] = useState({pledges: []});

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
            {/* move image formatting to css */}
            <h3>Created at: {project.date_created}</h3>
            <h3>Owner: {project.owner}</h3>
            <h3>Project Deadline: {project.deadline}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <p className="kl-to-do">Make this section a box</p>
            <h3>Funding Status: {project.funding_status}</h3>
            <h3>Goal: ${project.goal}</h3>
            <h3>Total Pledges: ${project.sum_pledges}</h3>
            <h3>Goal Balance: ${project.goal_balance}</h3>
            <p className="kl-to-do">Pledges and comments on right? Media Query to stack</p>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter}
                        <p className="kl-to-do">Avatar next to pledge item? part of diff model (users) how to call?</p>
                        </li>
                    );
                })}
            </ul>
            <p className="kl-to-do">Add comments: w/ avatar (usermodel),</p>

            <p className="kl-to-do">Will I need to change db scheme to FK avatar to be accessible to pledge and comment?</p>
            
        </div>
    );
}

export default ProjectPage;

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