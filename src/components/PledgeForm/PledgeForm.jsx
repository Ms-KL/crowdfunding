import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function PledgeForm() {
    // state 

    const [pledges, setPledges] = useState({
        amount: 0,
        comment: "",
        anonymous: false,
        id: "",
        project: "",
        supporter: "",
    });

    // HOOKS
    const navigate = useNavigate();


    const handleChange = (event) => {
        const { id, value } = event.target;
        // grab the id and value from target
        // every time the input changes it calls this function
        // event.target: get the target of input.
        setPledges((pledges) => ({
            ...pledges,
            [id]: value,
        }));
        // [id] = overrides
    };

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}pledges/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(pledges),
            }
        );
        return response.json();
    };

    
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (window.localStorage.getItem("token")) {
            await postData();
            navigate("pledges");
        }
    };

    // navigate: ideas - redirect, rerender w/ data or success

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
                <label htmlFor="anonymous">Anonymous:</label>
                <input
                    type="checkbox"
                    id="anonymous"
                    onChange={handleChange}
                />
                </div>
                
                <button type="submit">
                    Pledge
                </button>
                </form>
        </div>
    );
}

export default PledgeForm;
