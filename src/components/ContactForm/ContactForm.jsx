import React, { useState } from "react";

//CSS
import "./ContactForm.css";

// TODO: Make form functional
function ContactForm() {
    return (
        <form>
            <div className="contact-form">
                <div>
                    <label>Name:</label>
                    <input
                        id="name-text"
                        type="text"
                        placeholder="Your name here..."
                    />     
                </div>
                <div>
                    <label>Email:</label>                   
                    <input
                        id="email-text"
                        type="text"
                        placeholder="Your email here..."
                    />    
                </div>
                <div>
                    <label>Message:</label>                    
                    <input
                        id="message-text"
                        type="text"
                        placeholder="Your message here..."
                    />
                </div>                        
            </div>
            <button type="submit">Submit Contact Form</button>
        </form>
    );
    }

    export default ContactForm;

