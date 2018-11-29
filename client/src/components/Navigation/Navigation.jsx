import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
            color: ''
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleChange);
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

    handleChange(e) {
      if(window.scrollY > 100) {
        this.setState({ color: 'black' })
      } else {
        this.setState({ color: 'transparent' })
      }
    }

    render() {

        return (
            <nav ref={(elem) => {
                this.nav = elem;
              }} style={{ backgroundColor: this.state.color }}>
              <div>
                <div className="brand">JLS</div>
              </div>
              <style>
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
                  onClick={(e) => this.scrollToPage('.skills-page')}
                >
                  Skills
                </div>
                <div
                  className="menu__item"
                  onClick={(e) => this.scrollToPage('.portfolio-page')}
                >
                  Portfolio
                </div>
                <div
                  className="menu__item"
                  onClick={(e) => this.scrollToPage('.contact-page')}
                >
                  Contact
                </div>
              </div>
            </nav>
        );
    }
};
