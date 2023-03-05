import { Link } from "react-router-dom"


function AboutPage () {
    window.sessionStorage.removeItem("userData");
    return (
        <>
            <div className="hero-container">
                <h1>About Communitree</h1>
                <p className="feature-text">
                    Welcome to <strong>Communitree</strong>, the crowdfunding platform where <strong>tree-huggers</strong> unite to branch out and make a real impact on our urban forest. <strong>Our roots run deep </strong>in the community, and we're committed to cultivating a greener, healthier future for all!
                    <br />
                    <br />

                    Local governments, schools, and environmental organizations are <strong>leafing their mark</strong> on our urban forest. By registering and contributing on our site, both organizations and community members can access funds to make their plans for a healthier urban forest come to fruit-ion!

                    <br />
                    <br />

                    Communitree also offers a bark-tastic platform for local governments, schools, and environmental organizations to create projects that raise funds for community planting events and other initiatives. Supporters can pledge resources to <strong>Help make these projects grow</strong>, making it easy for everyone to get their hands dirty and create a better environment for ourselves and future generations.

                    <br />
                    <br />

                    So let's stick together and sow the seeds of change in our community! <strong>Join us on Communitree and let's leaf a positive impact on our urban forest!</strong>
                    <br />
                    <br />
                </p>
                <Link to="/contact" className="button-link">Contact</Link>
                <Link to="/users" className="button-link">Users</Link>
                <Link to="/projects" className="button-link">Projects</Link>
            </div>
        </>
    );
}

export default AboutPage;