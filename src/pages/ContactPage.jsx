


// Components
import ContactForm from "../components/ContactForm/ContactForm";


function ContactPage () {
    window.sessionStorage.removeItem("userData");
    return (
        <>
            <h1>Contact Us</h1>
            <p>A tree hugger will be in touch within 48 hours.</p>
            <ContactForm />
        </>
    );
}

export default ContactPage;