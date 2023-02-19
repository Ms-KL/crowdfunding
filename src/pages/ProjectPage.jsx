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
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
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