import React from 'react';
import './Contactsection.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <p>Get in touch</p>
            <h2>
                <strong>Connect</strong> with Us and Let's <br />
                Start a <strong>Conversation!</strong>
            </h2>
            
            <button className='connect-button'>Contact Us Now!</button>
        </div>
    );
};

export default ContactSection;
