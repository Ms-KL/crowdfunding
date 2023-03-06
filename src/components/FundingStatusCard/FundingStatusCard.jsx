// RENDERED ON USERPAGE.JSX + PROJECTPAGE.JSX + PROJECTCARD.JSX

import "./FundingStatusCard.css";

// ------- COMPONENTS -------
import ProgressBar from "../ProgressBar/ProgressBar";

function FundingStatusCard(props) {
    const { project } = props;

    return (
        <div id="funding-status">
            {/* -- PROGRESS BAR -- */}
            <ProgressBar
                        bgcolor="#385B4F"
                        completed={Math.round((project.sum_pledges / project.goal)*100)}
            />

            <table>
                <tbody>
                    <tr>
                        <th>Project Goal</th>
                        <th>Funds Raised</th>
                        <th>Funding Status</th>
                    </tr>
                    <tr>
                        <td>${project.goal}</td>
                        <td>${project.sum_pledges}</td>
                        <td>{project.funding_status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FundingStatusCard;