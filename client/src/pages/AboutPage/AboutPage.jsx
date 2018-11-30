import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import Profile from '../../style/images/profile.webP';
import './style.scss';

const AboutPage = (props) => {
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            <p>
              Hello! My name is Josiah Liciaga Silva - FullStack Software Engineer. <strong>Welcome </strong>to my portfolio!
            </p>
            <p>
              I am fully bilingual (English/Spanish) as I lived my childhood through my early teens in Cabo Rojo, Puerto Rico before moving to the state of Florida.
            </p>
            <div className="profile-img">
              <img src={ Profile } alt="" />
            </div>
            <p>
              Before switching to the Software Engineering field, I worked for many years as the lead Radiologic Technologist at Florida Hospital. Here I led a team of over 20 successful technologists.
            </p>
            <p>
              For my Software Engineering education I attended Hack Reactor, located in San Francisco, CA. Hack Reactor is rated the #2* Software Engineering program in the country and has been referred to as the “Harvard of coding bootcamps.”** Here I had experience working and training with the best software engineers in the country and was able to learn invaluable education in the field.
            </p>
            <p>
              I am passionate about software engineering and the creative aspect that coding requires. The process of creating a new technology from scratch or solving complicated problems has led me to create many advanced applications with real-world use. This website was built from scratch, and I always keep up-to-date with technology as it evolves.
            </p>
            <p>
              I specialize and do most of my work using JavaScript and its libraries/frameworks. Mainly using a MERN (MongoDB, ExpressJS, ReactJs and NodeJs) as my preferred stack, and it allows me to create applications quickly. I also have a lot of experience using AngularJS, Redux and WordPress, and the languages Python and C#. My favorites currently are blockchain and machine learning - I believe they are the future of software engineering.
            </p>
            <p>
              I am looking for a great company with a diverse and distributed team where new and innovative ideas are appreciated. I enjoy being challenged and understand that continuing to learn new languages and development techniques are important to me and the success of your organization. I also consider myself a fun and collaborative teammate to work with! My hobbies outside of work include paintballing competitively, jiu-jitsu, and spinning fire knife. (Yes, real knives with fire on each end!)
            </p>
            <p>
              Please feel free to explore my portfolio website and check out my projects and resume. Thank you for your time and consideration. I look forward to speaking with you more about your needs and my abilities.
            </p>
            <p>
              Best Regards,<br/>
                Josiah Liciaga-Silva
            </p>
            <p style={{textAlign:'right'}}>
              * Tech.co technology news<br/>
              ** CourseReport.com
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".skills-page" />
    </div>
  );
};

export default AboutPage;
