import React, { Component } from 'react';
import Logo from '../../style/images/logo.svg';
import './style.css';

export default class Loading extends Component {
    constructor(props) {
         super(props);
         this.state = {};
    }

    render() {
        return (
            <div>
                <div class="ipl-progress-indicator" id="ipl-progress-indicator">
                    <div class="ipl-progress-indicator-head">
                    <div class="first-indicator"></div>
                    <div class="second-indicator"></div>
                    </div>
                    <div class="insp-logo-frame">
                        <img iclass="insp-logo-frame-img" src="logo.svg" alt="preloader logo" />
                    </div>
                </div>
            </div>
        )
    }
};
