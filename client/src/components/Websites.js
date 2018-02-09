import React, { Component } from 'react';
import cowboysPhoto from '../images/cowboysOfficial.png';
import bloggingBPhoto from '../images/bloggingtheboys.png';
import espnPhoto from '../images/espn.png';
import sportsDayPhoto from '../images/sports-day.png';

class Websites extends Component {
  render() {
    return (
      <div className="websites">
        <div className="websites-layout">
          <h2> Websites </h2>
          <div className="website-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.dallascowboys.com">
              <img src={cowboysPhoto} alt="" />
            </a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.dallascowboys.com">
                <h3>Dallas Cowboys Official Website</h3>
              </a>
              <br />This is the offical website of the Dallas Cowboys. All of
              your basic need will be on this website. From scores, schedules,
              news, and a top tier news team including David Helman, Bryan
              Broaddus, Nick Eatman, and more!
            </div>
          </div>
          <div className="website-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://sportsday.dallasnews.com/dallas-cowboys">
                <h3>Sports Day Dallas</h3>
              </a>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://sportsday.dallasnews.com/dallas-cowboys">
              <img src={sportsDayPhoto} alt="" />
            </a>
          </div>
          <div className="website-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.espn.com/nfl/team/_/name/dal/dallas-cowboys">
            <img src={espnPhoto} alt="" />
            </a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.espn.com/nfl/team/_/name/dal/dallas-cowboys">
                <h3>ESPN Dallas Cowboys</h3>
              </a>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
            </div>
          </div>
          <div className="website-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.bloggingtheboys.com">
                <h3>Blogging the Boys</h3>
              </a>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="http://www.bloggingtheboys.com">
              <img src={bloggingBPhoto} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Websites;
