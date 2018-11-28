import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll() {
        if(window.pageYOffset > this.nav.offsetTop) {
            this.setState({
                isSticky: true
            })
        } else {
            this.setState({
                isSticky: false
            })
        }
    };

    scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    };

    render() {
        return (
            <nav
            //   className={stickyClass}
              ref={(elem) => {
                this.nav = elem;
              }}
            //   style={stickyStyles}
            >
              <div>
                <div className="brand">JLS</div>
              </div>
              <style jsx="true">
                {`
                  .menu__item:hover {
                    border-bottom: 2px solid;
                  }
                `}
              </style>
              <div className="menu">
                <div
                  className="menu__item active"
                  onClick={(e) => this.scrollToPage('.about-page')}
                >
                  About
                </div>
                <div
                  className="menu__item"
                  onClick={(e) => this.scrollToPage('.portfolio-page')}
                >
                  Portfolio
                </div>
                <div
                  className="menu__item"
                  onClick={(e) => this.scrollToPage('.portfolio-page')}
                >
                  Contact
                </div>
              </div>
            </nav>
        );
    }
};
