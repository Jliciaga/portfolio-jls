import React, { Component } from 'react';
import Parallax from './components/Background/Parallax';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  
  loading() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  };

  componentDidMount() {
    this.loading().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele) {
        ele.classList.add('available')
        // setTimeout(() => {
        //   ele.outerHTML = ''
        // }, 2000)
      }
    });
  };

  render() {
    return (
      <div className="dev-landing-page">
          <Parallax />
          <LandingPage />
          <AboutPage />
          <SkillsPage />
          <PortfolioPage />
          <ContactPage />
          <Footer />
      </div>
    );
  }
};
