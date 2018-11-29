import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';

import './style.scss';

const AboutPage = (props) => {
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            <p>
              Hello! My name is Josiah Liciaga Silva, 
              fullstack software engineer.<strong> Welcome! </strong> 
               to my portfolio.
            </p>
            <p>
              I have worked as a software engineer since early 2016, 
              currently working as a freelancer for Elevate Entertainment 
              either as a UX/UI designer or building fullstack websites and/or applications 
              from scratch. I lived my childhood through my early teens in Cabo Rojo, Puerto Rico
              before moving to the state of Florida in the United States. I have traveled far and wide
              to different states in the US and to different coutries. My love for exploration has led me to discover
              many beautiful locations across many different areas and has led me to discover new and exciting technologies.
            </p>
            <p>
              I have always loved the art or creative aspect that coding requires, the process of creating something new from scratch or
              solving new or old problems, have led me to create many awesome applications with real world use. I built this site from absolute scratch. 
              I didnt use any UI library or framework except for React as it is incredible useful to work with. I try to keep up to date with 
              the pace of technology as it evolves, which then leads me to blog what ever I learn, because shared knowledge is the best knowledge.
            </p>
            <p>
              I specialize and do most of my work using JavaScript and its libraries/frameworks, 
              mainly using a MERN (MongoDB, ExpressJS, ReactJs and NodeJs) 
              stack as it is my preferred stack and it allows me to create applications quickly, 
              but have also done a good amount of work using AngularJS, Redux and WordPress.
              I have a good amount of fundamental knowledge of the languages Python and C# and some their libraries/frameworks. 
              I am also obsessed with blockchain and machine learning as I believe they are future.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".skills-page" />
    </div>
  );
};

export default AboutPage;
