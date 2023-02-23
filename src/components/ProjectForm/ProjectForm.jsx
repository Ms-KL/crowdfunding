import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectForm(props) {
    const authToken = window.localStorage.getItem("token")
    const [projects, setProjects] = useState({
        "title": "",
        "description": "",
        "goal": null,
        "image": "",
        "is_open": true,
        "deadline": null,
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjects((prevProjects) => ({
        ...prevProjects,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token")

        if (authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}projects/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(projects),
                }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                navigate(-1);
            } catch (err) {
                console.error(err);
                alert(`Error: ${err.message}`);
            }
        } else {
        // redirect to login page
        navigate(`/login`);
        }
    };

    return (
        <>
        {authToken ? 
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Enter description"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="goal">Goal:</label>
                <input
                    type="number"
                    id="goal"
                    placeholder="enter a goal"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="image">Image URL:</label>
                <input 
                    type="text"
                    id="image" 
                    onChange={handleChange} 
                />
                </div>
                <div>
                <label htmlFor="is_open">Activate Project:</label>
                <input 
                    type="checkbox"
                    id="is_open" 
                    onChange={handleChange} 
                />
                </div>
                <div>
                <label htmlFor="deadline">Project Deadline:</label>
                <input 
                    type="datetime-local" 
                    id="deadline" 
                    onChange={handleChange} 
                />
                </div>
                <button type="submit">Create Project</button>
            </form>
            </div>
        : (<p>Login to create a project</p>) }
        </>

    );
}

export default ProjectForm;
