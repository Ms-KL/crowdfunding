import { useState, useEffect } from "react";

// components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import PledgeCard from "../components/PledgeCard/PledgeCard";

function PledgePage() {

    // State
    const [pledgeList, setPledgeList] = useState([]);
    // ACTIONS

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
    
    // calc totals
    const pledgesTotal = pledgeList.length;
    const pledgesTotalFunds = pledgeList
        .map(pledge => pledge.amount)
        .reduce((runningTotal, amount) => runningTotal + amount,0);

    return (
        <div>
            <h2>Communitree Support Totals</h2>
            <p>Total Pledges: {pledgesTotal} | Total Funds Raised: ${pledgesTotalFunds} </p> 

            <h3>All Pledges</h3>
            <div id="pledge-list">
                {pledgeList.map((pledge, key) => {
                    return <PledgeCard key={key} pledgeData={pledge} />;
                })}
            </div>

            <PledgeForm />
        </div>
    );
};

export default PledgePage;




// trying to link to Project Page within pledge card. Not working. Starter code below:
// import { useState, useEffect } from "react";

// // components
// import PledgeForm from "../components/PledgeForm/PledgeForm";
// import PledgeCard from "../components/PledgeCard/PledgeCard";

// function PledgePage() {

//     // State
//     const [pledgeList, setPledgeList] = useState([]);

//     // ACTIONS

//     // Pledge Data
//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}pledges`)
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setPledgeList(data);
//         });

//     }, []);

//     // Project Data
//     useEffect(() => {
//         const fetchProject = async () => {
//             try {
//                 const res = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`);
//                 const data = await res.json();
//                 setProject(data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchProject();
//     }, []);
    
//     // calc totals
//     const pledgesTotal = pledgeList.length;
//     const pledgesTotalFunds = pledgeList
//         .map(pledge => pledge.amount)
//         .reduce((runningTotal, amount) => runningTotal + amount,0);

//     return (
//         <div>
//             <h2>Communitree Support Totals</h2>
//             <p>Total Pledges: {pledgesTotal} | Total Funds Raised: ${pledgesTotalFunds} </p> 

//             <h3>All Pledges</h3>
//             <div id="pledge-list">
//                 {pledgeList.map((pledge, key) => {
//                     return <PledgeCard key={key} pledgeData={pledge} projectData={pledge.projectData} />;
//                 })}
//             </div>        
//             <PledgeForm />
//         </div>
//     );
// };

// export default PledgePage;