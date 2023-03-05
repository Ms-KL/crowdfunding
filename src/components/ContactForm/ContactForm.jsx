
import { useForm, ValidationError } from '@formspree/react';

//CSS
import "./ContactForm.css";


function ContactForm() {

    // formspree code
    const [state, handleSubmit] = useForm("xbjeygdj");

    if (state.succeeded) {
        return <p>Thank you for contacting Communitree.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form">
                <div>
                    <label>Name:</label>
                    <input
                        id="name-text"
                        type="text"
                        placeholder=""
                    />     
                </div>
                <div>
                    <label htmlFor="email">Email:</label>                   
                    <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />  
                </div>
                <div>
                    <label>Message:</label>                    
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />  
                </div>
            </div>
            <button type="submit" disabled={state.submitting}>
            Submit
        </button>
        </form>
    );
}

    export default ContactForm;

