// RENDERED ON HOMEPAGE.JSX

//CSS
import "./CalculationsCard.css";

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
        <table>
            <tbody>
            <tr>
                <td>Projects:</td>
                <td>{projectsTotal}</td>
            </tr>
            <tr>
                <td>Pledges:</td>
                <td>{pledgesTotal}</td>
            </tr>
            <tr>
                <td>Funds Raised:</td>
                <td>${pledgesTotalFunds}</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}

export default CalculationsCard;