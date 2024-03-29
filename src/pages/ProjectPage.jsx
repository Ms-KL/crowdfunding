import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// ------- COMPONENTS -------
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProjectCommentForm from "../components/ProjectCommentForm/ProjectCommentForm";
import PledgeCard from "../components/PledgeCard/PledgeCard";
import CommentCard from "../components/CommentCard/CommentCard";
import FundingStatusCard from "../components/FundingStatusCard/FundingStatusCard";


function ProjectPage() {


    // ------- STATE -------
    const [project, setProject] = useState({});
    const [user, setUser] = useState({});

        // ------- AUTH -------
        const authToken = window.localStorage.getItem("token")

    // ------- HOOKS -------
    const { id } = useParams();

    // ------- ACTIONS & EFFECTS -------
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`);
                const data = await response.json();
            // Sort new - old
                data.pledges.sort((a, b) => new Date(b.date_pledged) - new Date(a.date_pledged));
            // Sort old - new
                data.comments.sort((a, b) => new Date(b.created) - new Date(a.created));
                setProject(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProject();
}, []);

    // ------- ACTIONS & EFFECTS -------

    // FETCH (GET) session user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}users/session/`, 
                    {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                    }
                    });
                const data = await response.json();
                window.sessionStorage.setItem("userData", JSON.stringify(data));
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [authToken]);

    // If user ID is the same as project, then they are owner
    const isOwner = () => {
        if (Object.keys(user).length === 0 || Object.keys(project).length === 0) {
          return false;
        }
        return user.username === project.owner;
      };
      

    // ------- RENDER -------

    return (
        <div className="project-detail">
            
            {/* -- PROJECT DETAILS -- */}
            <br />
            <h1>{project.title}</h1>
            {isOwner() && (
            <Link to={`/projects/${project.id}/edit`} className="button-link">
                Edit
                </Link>)}

            <br />
            <br />
            <div className="hero-container">

                <img src={project.image} />

            {/* -- PROJECT TIMELINE -- */}

                <h4>Project Start: {new Date(project.date_created).toLocaleDateString()} &emsp;|&emsp; Project Deadline: {new Date(project.deadline).toLocaleDateString()} &emsp;|&emsp; {project.is_open ? 'Active' : 'Inactive'}</h4>

                <p>{project.description}</p>

            {/* -- FUNDING STATUS -- */}
                <FundingStatusCard project={project} />

                <h4><div className="avatar-container" id="project-page-avatar">
                {project.owner_avatar && <img src={project.owner_avatar} alt="avatar" />}&emsp;
            {project.owner}'s project</div></h4>

            </div>

            {/* -- COMMENT CARD + FORM -- */}
            <div>
                <br />
                <h2>Comments:</h2>
                    <div className="card-list">
                        {project.comments &&
                        project.comments.map((comment, key) => {
                            return <CommentCard key={key} comment={comment} />;
                        })}
                    </div>
            <ProjectCommentForm project={project} />
            </div>

            {/* -- PLEDGE CARD + FORM -- */}
                <div>
                    <h2>Pledges:</h2>
                    <div className="card-list">
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

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes 
*/