import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PledgeForm() {
    const [pledges, setPledges] = useState({
        amount: 0,
        comment: "",
        anonymous: false,
        id: 0,
        project: "",
        supporter: "",
        date_pledged: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledges((prevPledges) => ({
        ...prevPledges,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token")

        if (authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}pledges/`,
                    {
                    method: "post",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(pledges),
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
            <label htmlFor="amount">Amount:</label>
            <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="comment">Comment:</label>
            <input
                type="text"
                id="comment"
                placeholder="Enter Comment"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="supporter">Supporter:</label>
            <input
                type="text"
                id="supporter"
                placeholder="needs to be autofilled with loggedin user"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="anonymous">Anonymous:</label>
            <input 
                type="checkbox"
                id="anonymous" 
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
            <div>
            <label htmlFor="date_pledged">Date Pledged:</label>
            <input type="datetime-local" id="date_pledged" onChange={handleChange} />
            </div>
            <button type="submit">Pledge</button>
        </form>
        </div>
    );
}

export default PledgeForm;
