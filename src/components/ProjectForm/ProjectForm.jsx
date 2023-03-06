// RENDERED ON CREATEPROJECTPAGE.JSX

import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function ProjectForm() {

    // ------- AUTH -------
    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();

    // ------- HOOKS -------    
    const navigate = useNavigate();

    // ------- STATE -------
    const [projects, setProjects] = useState({
        "title": "",
        "description": "",
        "goal": null,
        "image": "",
        "is_open": true,
        "deadline": null,
    });

    // ------- ACTIONS & EFFECTS -------
    const handleChange = (event) => {
        const { id, value } = event.target;
        // adding new project ID and value to array 
        setProjects((prevProjects) => ({
        ...prevProjects,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loggedIn) {
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
                navigate(`/projects`);
            } catch (err) {
                console.error(err);
                alert(`Error: ${err.message}`);
            }
        } else {
        // redirect to login page
        navigate(`/login`);
        }
    };

    // ------- RENDER -------
    return (
        <>
        {loggedIn ? 
            <div>
            <form onSubmit={handleSubmit}>
            <h2>Create a project</h2>
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
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <label htmlFor="is_open">Activate:</label>
                <input 
                    type="checkbox"
                    id="is_open" 
                    defaultChecked={projects.is_open}
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
