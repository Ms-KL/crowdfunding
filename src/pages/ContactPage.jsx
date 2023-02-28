import { useState } from "react";


// Components
import ContactForm from "../components/ContactForm/ContactForm";


function ContactPage () {
    return (
        <>
            <h1>Contact Us</h1>
            <p>We will be in touch within 48 hours.</p>
            <ContactForm />
        </>
    );
}

export default ContactPage;