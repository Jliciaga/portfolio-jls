import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import skillItems from './skill-items';

import './style.scss';

const SkillsPage = (props) => {
  return (
    <div className="skills-page">
      <div className="content-grid">
        <h1 style={{color:'white'}}>Skills</h1>
        <div className="skills-wrapper">
          {skillItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

export default SkillsPage;