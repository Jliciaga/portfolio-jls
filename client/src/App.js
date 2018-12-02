import React, { Component, lazy, Suspense } from 'react';
import Parallax from './components/Background/Parallax';
import LandingPage from './pages/LandingPage/LandingPage';
import Loading from './components/Loading/Loading.jsx';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage/SkillsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export default class App extends Component {
  
  loading() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  };

  componentDidMount() {
    this.loading().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele) {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }
    });
  };

  render() {
    return (
      <div className="dev-landing-page">
          <Parallax />
          <LandingPage />
      <Suspense fallback={ <Loading /> } >
          <AboutPage />
          <SkillsPage />
          <PortfolioPage />
          <ContactPage />
          <Footer />
      </Suspense>
      </div>
    );
  }
};
