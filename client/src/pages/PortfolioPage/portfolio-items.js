import React from 'react';
import budget from '../../style/images/budgetlife.webP';
import games from '../../style/images/popupgames.webP';
import storm from '../../style/images/weather.webP';
import quest from '../../style/images/quest.webP';

export default [{
  name: 'BudgetLife',
  render: (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Featured</div>
          <h4 className="project-title">BudgetLife</h4>
          <div className="project-details">
            <p>Search through thousands of recipes without having to worry about any dangerous food allergies with this powerful app</p>
            <p>Discover the many different cooking styles and recipes the world has to offer with this powerful app</p>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>Webpack</li>
            </ul>
            <ul>
              <li className="external-link"><a aria-label="github budgetlife" href="https://github.com/Jliciaga/mcgonagall"><i className="fab fa-github"></i></a></li>
              <li className="external-link"><a aria-label="website budgetlife" href="https://budgetlife.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></li>
            </ul>
          </div>
        </div>  
        <div className="project-img">
          <img src={ budget } alt="" />
        </div>
      </div>
    </div>
  )
}, {
  name: 'PopUp-Games',
  render: (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Featured</div>
          <h4 className="project-title">Pop Up Games</h4>
          <div className="project-details">
            <p>Easily create an event and invite your freinds or make it public, this venue creation makes it easy to get back to the great outdoors with your family or friends</p>
            <p>Create and populate google maps with events or see whats going on around you with this easy to use app</p>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>mySQL</li>
              <li>WebPack</li>
            </ul>
            <ul>
              <li className="external-link"><a aria-label="github popup games" href="https://github.com/Jliciaga/Pop-Up-Games"><i className="fab fa-github"></i></a></li>
              <li className="external-link"><a aria-label="website popup games" href="https://pop-up-games.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></li>
            </ul>
          </div>
        </div>  
        <div className="project-img">
          <img src={ games } alt="" />
        </div>
      </div>
    </div>
  )
}, {
  name: 'Storm-Tracker',
  render: (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Featured</div>
          <h4 className="project-title">Storm Tracker</h4>
          <div className="project-details">
            <p>Know whats happening around you at all times, know of any incoming dangerous weather events near you or your loved ones</p>
            <p>Features an user friendly UI that allows the user to quickly see any events happening nearby and the ability to track locations that important</p>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>mySQL</li>
              <li>Webpack</li>
            </ul>
            <ul>
              <li className="external-link"><a aria-label="github storm traker" href="https://github.com/Jliciaga/disastertracker"><i className="fab fa-github"></i></a></li>
              <li className="external-link"><a aria-label="website storm tracker" href="https://thesis-storm-tracker.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></li>
            </ul>
          </div>
        </div>  
        <div className="project-img">
          <img src={ storm } alt="" />
        </div>
      </div>
    </div>
  )
}, {
  name: 'Quest',
  render: (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Featured</div>
          <h4 className="project-title">Quest</h4>
          <div className="project-details">
            <p>Nothing ventured, nothing gained, explore and discover whats around, get suggestions on what to do tailored to you based on what like and dislike</p>
            <p>Features a easy to use UI system, google maps for easy navigation.. as well as more features to come</p>
            <ul>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>ExpressJS</li>
              <li>Passport</li>
              <li>PostgreQL</li>
            </ul>
            <ul>
              <li className="external-link"><a aria-label="github quest" href="https://github.com/Jliciaga/seekerapp"><i className="fab fa-github"></i></a></li>
              <li className="external-link"><a aria-label="website quest" href="http://seekerapp.herokuapp.com"><i className="fas fa-external-link-alt"></i></a></li>
            </ul>
          </div>
        </div>  
        <div className="project-img">
          <img src={ quest } alt="" />
        </div>
      </div>
    </div>
  )
}];