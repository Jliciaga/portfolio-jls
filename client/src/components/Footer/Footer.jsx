import React from 'react';
import ScrollTop from '../ScrollTop/ScrollTop';
import './style.css';

const Footer = () => (
    <section id="lab_social_icon_footer">
        <div className="container">
            <div className="text-center center-block">
                <a aria-label="linkedin" href="https://www.linkedin.com/in/josiah-liciaga-silva-7684a615a/"><i id="social-fb" className="fab fa-linkedin-in fa-3x social"></i></a>
	            <a aria-label="github" href="https://github.com/Jliciaga"><i id="social-tw" className="fab fa-github fa-3x social"></i></a>
	            <a aria-label="medium" href="https://medium.com/me/stories/public"><i id="social-gp" className="fab fa-medium-m fa-3x social"></i></a>
	            <a aria-label="email" href="mailto:josiah.liciaga@gmail.com"><i id="social-em" className="far fa-envelope fa-3x social"></i></a>
            </div>
            <ScrollTop />
        </div>
        <div className="sub-container">
            <div className="text-center center-block">
                designed and built by Josiah Liciaga Silva
            </div>
        </div>
    </section>
)

export default Footer;
