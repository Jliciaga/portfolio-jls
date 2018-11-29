import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ScrollNext from '../../components/ScrollToNext/ScrollToNext';
import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = (props) => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1 style={{color:'white'}}>Portfolio</h1>
        <div className="portfolio-wrapper">
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollNext pageSelector=".contact-page" />
    </div>
  );
};

export default PortfolioPage;