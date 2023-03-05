import { useState, useEffect } from "react";

// components
import PledgeCard from "../components/PledgeCard/PledgeCard";

function PledgePage() {

    // --------------- STATE 
    const [pledgeList, setPledgeList] = useState([]);

    // --------------- ACTIONS 

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

    /* use map to target amount value in pledgeList
        runningTotal starts at 0, amount is each mapped amount value from pledgeList
        for each value in amount mapped from Pledge list, add it to the running total
        https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d */
    const pledgesTotalFunds = pledgeList
        .map(pledge => pledge.amount)
        .reduce((runningTotal, amount) => runningTotal + amount,0);

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
