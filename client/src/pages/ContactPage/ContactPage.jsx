import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';

import './style.scss';

const ContactPage = (props) => {
  return (
    <div className="contact-page">
      <div className="content-grid">
        <h1>contact</h1>
        <div className="contact-wrapper">
          <div className="contact-content">
            <p>
                Well that's a wrap, like what you saw, looking to build something cool or just want to talk tech? Shoot me an email, I try my hardest to keep tabs on it.
            </p>
            <p>
               Thanks for coming!
            </p>
            <a href="mailto:josiah.liciaga@gmail.com" class="button">
                <span class="away">Say Hello</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
