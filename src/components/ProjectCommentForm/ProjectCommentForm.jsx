// RENDERED ON PROJECTPAGE.JSX

import React, { useState } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";

function ProjectCommentForm(props) {
    
    // ------- AUTH -------
    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();

    // ------- STATE -------
    const [comments, setComments] = useState({
        "body": "",
        "project": null
    });

    // ------- HOOKS -------
    const { project } = props;
    const navigate = useNavigate();

    // ------- ACTIONS & EFFECTS -------
    const handleChange = (event) => {
        const { id, value } = event.target;
        setComments((prevComments) => ({
        ...prevComments,
        [id]: value,
        project: project.title, 
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loggedIn) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}comments/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(comments),
                }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                location.reload();
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
        {loggedIn ? 
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Comment on this project</h2>
            <div>
            <label htmlFor="body">Comment:</label>
            <input
                type="text"
                id="body"
                placeholder="Enter Comment"
                onChange={handleChange}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        : (
        <Link to="/login" className="button-link">
        Login to Comment
        </Link>
        ) }
        </>
    );
}

export default ProjectCommentForm;
