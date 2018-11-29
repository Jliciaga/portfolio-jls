import React from 'react';
import './style.css';

const PortfolioItem = (props) => {

  if (props.render) return props.render;
  else
    return (
      <div className="portfolio-item">
        Error In PortfolioItems
      </div>
    );
};

export default PortfolioItem;
