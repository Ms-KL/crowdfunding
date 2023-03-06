import { useState, useEffect } from "react";

// ------- COMPONENTS -------
import PledgeCard from "../components/PledgeCard/PledgeCard";

function PledgePage() {

    // ------- STATE -------
    const [pledgeList, setPledgeList] = useState([]);

    // ------- ACTIONS & EFFECTS -------

    // Pledge Data
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}pledges`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPledgeList(data);
        });
    }, []);

    // Number of pledges in pledgeList (length)
    const pledgesTotal = pledgeList.length;

    // Running total of Pledges
    const pledgesTotalFunds = pledgeList
        .map(pledge => pledge.amount)
        .reduce((runningTotal, amount) => runningTotal + amount,0);
    /* 
    for each value in amount mapped from Pledge list, add it to the running total
        map: target amount value in pledgeList
        runningTotal: starts at 0
        amount: each mapped amount value from pledgeList
    */

    // ------- RENDER -------
    return (
        <div>
            <h2>Communitree Support Totals</h2>
            <p>Total Pledges: {pledgesTotal} | Total Funds Raised: ${pledgesTotalFunds} </p> 

            <h3>All Pledges</h3>
            <div className="card-list">
                {pledgeList.map((pledge, key) => {
                    return <PledgeCard key={key} pledge={pledge} />;
                    // send key and pledge to PledgeCard through props
                })}
            </div>
        </div>
    );
};

export default PledgePage;

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes 
*/

