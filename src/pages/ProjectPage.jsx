import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Dummy Data
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProjectCommentForm from "../components/ProjectCommentForm/ProjectCommentForm";
import PledgeCard from "../components/PledgeCard/PledgeCard";
import CommentCard from "../components/CommentCard/CommentCard";

//Progress Bar
import ProgressBar from "../components/ProgressBar/ProgressBar";


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
                // Sort the pledges in reverse chronological order
                data.pledges.sort((a, b) => new Date(b.date_pledged) - new Date(a.date_pledged));
                // Sort the comments in reverse chronological order
                data.comments.sort((a, b) => new Date(b.created) - new Date(a.created));
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
            <div className="avatar-container">
                {project.owner_avatar && <img src={project.owner_avatar} alt="avatar" />}
            </div>
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
                <ProgressBar
                    bgcolor="#385B4F"
                    completed={(project.sum_pledges / project.goal) * 100}
                    />
            </div>

            <p>-------------------------------</p>
            {/* if project comments exist, post them */}
            <div>
                <h2>Comments:</h2>
                    <div id="comment-list">
                        {project.comments &&
                        project.comments.map((comment, key) => {
                            return <CommentCard key={key} comment={comment} />;
                        })}
                    </div>
            </div>
            <ProjectCommentForm project={project} />

            <p>-------------------------------</p>
            {/* if pledges exist, post them */}
            {/* passes project from project page into the pledge form. so can use as project in form */}
            
                <div>
                    <h2>Pledges:</h2>
                    <div id="pledge-list">
                        {project.pledges &&
                        project.pledges.map((pledge, key) => {
                            return <PledgeCard key={key} pledge={pledge} />;
                        })}
                </div>
                <PledgeForm project={project} /> 
 
                </div>
        </div>
    );
}

export default ProjectPage;

// MAP ISSUE:
// https://stackoverflow.com/questions/71135587/react-js-typeerror-cannot-read-properties-of-undefined-reading-map
// https://java2blog.com/typeerror-map-is-not-function-javascript/

// PROGRESS BAR:
// https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl