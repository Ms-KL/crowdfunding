// RENDERED ON PROJECTPAGE.JSX + PLEDGEPAGE.JSX + USERPROFILE.JSX

//CSS
import "./PledgeCard.css";

function PledgeCard(props) {
    const { pledge, user } = props;

    return (
        <>
            <div className="pledge-card">
                <div className="avatar-container">
                    {!user && !pledge.anonymous && (
                        pledge.supporter_avatar && 
                        <img src={pledge.supporter_avatar} alt="avatar" />
                    )}
                    {!user && pledge.anonymous && (
                        pledge.supporter_avatar && <img src="https://images.pexels.com/photos/6505027/pexels-photo-6505027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />)}
                </div>
                <div className="pledge-card-text">
                    <h3>{!user && pledge.supporter}</h3>
                    <p id="pledgeAmount">${pledge.amount}</p>
                    <p>"{pledge.comment}"</p>  
                    {user &&
                    <p>{pledge.project}</p>
                    }
                    <p id="pledgeDate">{new Date(
                        pledge.date_pledged).toLocaleDateString()}
                    </p>          
                </div>
            </div>
        </>
    );
}


export default PledgeCard;

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes
*/