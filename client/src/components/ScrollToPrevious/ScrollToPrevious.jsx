import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div
        className="scroll-to-previous"
        onClick={(e) => this.scrollToPrevious()}
      >
        <div className="arrow bounce">
          <button className="fas fa-chevron-up fa-2x" href="#" />
          <div className="scroll-text">Click Me</div>
        </div>
      </div>
    );
  }
}

export default ScrollToPrevious;