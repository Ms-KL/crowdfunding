import { useState } from "react";
import { Link } from "react-router-dom"


function AboutPage () {
    return (
        <>
            <h1>About Communitree</h1>
            <p>
            Welcome to Communitree, a crowdfunding website where tree-huggers gather to make a real impact on the urban forest of their community. 
            
            Local governments, schools, and environmental organizations play a crucial role in shaping the urban forest, and with the WA Urban Forest strategies, they have the opportunity to make a real impact on the health, beauty, and sustainability of their city. By registering and contributing on this website, both organizations and community members can access funds to achieve their individual urban forest strategy plans.

            In addition, Communitree also offers a platform for local governments, schools, and environmental organizations to create projects that raise funds for community busy bees and planting days/events. 
            
            Supporters can pledge resources to help these projects become a reality, making it easier for everyone to get involved in creating a greener, healthier future for all. Let's work together to create a better environment for ourselves and future generations.
            </p>
            <Link to="/users">Get to know our Tree-Huggers</Link><br />
            <Link to="/projects">Explore our Communitree Projects</Link>
        </>
    );
}

export default AboutPage;