import React from 'react';
// import SocialIcons from './../../components/SocialIcons';
import Navigation from './../../components/Navigation/Navigation';
import Typewritter from '../../components/Typewritter/Typewritter';
import ScrollToNext from './../../components/ScrollToNext/ScrollToNext';

import './style.scss';

const staticText = ['I like... '];
const words = ['coding.', 'exploring.', 'blogging.', 'gaming.', 'paintball.'];

const LandingPage = (props) => (
    <div className="landing-page">
      <Navigation />
        <main>
          <div className="intro-wrapper">
            <div className="intro-name">Josiah Liciaga Silva</div>
            <div className="tagline">
              FullStack Software Engineer
            </div>
            <Typewritter staticText={staticText} words={words} />
          </div>
        </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
);

export default LandingPage;
