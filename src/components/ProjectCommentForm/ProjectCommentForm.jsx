import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectCommentForm() {
    const [comments, setComments] = useState({
        "body": "",
        "project": null
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setComments((prevComments) => ({
        ...prevComments,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token")

        if (authToken) {
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
            navigate(`/`);
        } catch (err) {
            console.error(err);
        }
    } else {
    // redirect to login page
    navigate(`/login`);
    }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="body">Comment:</label>
            <input
                type="text"
                id="body"
                placeholder="Enter Comment"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="project">Project:</label>
            <input
                type="text"
                id="project"
                placeholder="needs to be auto-filled with current project"
                onChange={handleChange}
            />
            </div>
            <button type="submit">Submit Comment</button>
        </form>
        </div>
    );
}

export default ProjectCommentForm;
