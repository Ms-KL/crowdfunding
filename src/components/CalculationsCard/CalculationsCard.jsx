import { Link } from "react-router-dom";

//CSS
// import "./CalculationsCard.css";


function CalculationsCard(props) {
    const { projectList, pledgeList } = props;
    
    // calc totals
    const projectsTotal = projectList.length;
    const pledgesTotal = pledgeList.length;
    const pledgesTotalFunds = pledgeList
        .map(pledge => pledge.amount)
        .reduce((runningTotal, amount) => runningTotal + amount,0);

    return (
        <div className="calculations-card">
            <p>Total Projects: {projectsTotal} | Total Pledges: {pledgesTotal} | Total Funds Raised: ${pledgesTotalFunds} </p>
        </div>
    );
}

export default CalculationsCard;