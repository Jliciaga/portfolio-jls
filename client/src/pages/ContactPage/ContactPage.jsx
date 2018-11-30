import React from 'react';
import './style.scss';

const ContactPage = (props) => {
  return (
    <div className="contact-page">
      <div className="content-grid">
        <h1>contact</h1>
        <div className="contact-wrapper">
          <div className="contact-content">
            <p>
                Well that's a wrap, like what you saw, looking to build something cool with me or just want to talk tech? Shoot me an email.
            </p>
            <p>
               Thanks for coming!
            </p>
            <a aria-label="email" href="mailto:josiah.liciaga@gmail.com" className="button">
                <span className="away">Say Hello</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
