import React from 'react';
import PropTypes from 'prop-types';
// import SocialIcons from './../../components/SocialIcons';
import Navigation from './../../components/Navigation/Navigation';
import ScrollToNext from './../../components/ScrollToNext/ScrollToNext';
// import BrowserNotes from '@components/BrowserNotes';

import './style.css';

const LandingPage = (props, context) => (
    <div className="landing-page">
      <Navigation />
      <main>
        {/* <BrowserNotes /> */}
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Josiah Liciaga Silva!</div>
          <div className="tagline">
            Full Stack Engineer | Adventurer | Blogger | Artist | Part time Ninja
          </div>
          {/* <SocialIcons /> */}
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
);

export default LandingPage;
