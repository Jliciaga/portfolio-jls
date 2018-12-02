import React, { Component, lazy, Suspense } from 'react';
import './style.scss';
const Logo = lazy(() => import('../../style/images/logo.svg'))
// import Logo from '../../style/images/logo.svg';

export default class Loading extends Component {
    constructor(props) {
         super(props);
         this.state = {};
    }

    render() {
        return (
            <div>
                <div className="ipl-progress-indicator" id="ipl-progress-indicator">
                    <div className="ipl-progress-indicator-head">
                    <div className="first-indicator"></div>
                    <div className="second-indicator"></div>
                    </div>
                    <div className="insp-logo-frame">
                        <Suspense>
                            <img iclass="insp-logo-frame-img" src={ Logo } alt="preloader logo" />
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
};
