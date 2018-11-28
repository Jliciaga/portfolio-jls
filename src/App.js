import React, { Component } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
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
    })
  };

  render() {
    return (
      <div className="dev-landing-page">
        {/* <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser> */}
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          {/* <ScrollTop />
          <Footer />
        </ThemeSwitcher> */}
      </div>
    );
  }
};
