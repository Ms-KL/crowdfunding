import React, { useState } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";


function PledgeForm(props) {

    // HOOKS
    const { project } = props;
    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();
    
    // STATE
    const [pledges, setPledges] = useState({
        // from JSON Raw Body in Deployed (default values)
        "amount": null,
        "comment": "",
        "anonymous": false,
        "project": null,
    });

    // enables redirect
    const navigate = useNavigate();

    // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below. 
    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledges((prevPledges) => ({
        ...prevPledges,
        [id]: value,
        project: project.title, 
        }));
    };

    // submit the new data (state change) from handleChange.
        // POST has been moved from separate function to be embedded and actioned when the submit button is pressed. 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // if the auth token exists (if logged in) 
            // TRY to POST the data to deployed, using fetch.
            // send the token with it to authorise the ability to post
                // wait for the response - 
                // if successful, return the JSON payload and reload the page with the data
                // if not successful, CATCH the error and display as a pop up alert
        // if not logged in, redirect to login page

        if (loggedIn) {
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
            <h2>Send a pledge</h2>
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
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <label htmlFor="anonymous">Anonymous:</label>
                <input 
                    type="checkbox"
                    id="anonymous" 
                    defaultChecked={pledges.anonymous}
                    onChange={handleChange} 
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        : (
            <Link to="/login" className="button-link">
            Login to Pledge
            </Link>
        ) }
        </>
    );
}

export default PledgeForm;


// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful