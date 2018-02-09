import React, { Component } from 'react';
import redditPhoto from '../images/cowboys-reddit.png'
import czonePhoto from '../images/cowboys-zone.png'

class Forums extends Component {
  render() {
    return (
      <div className="forums">
        <div className="forums-layout">
          <h2> Forums </h2>
          <div className="forum-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.reddit.com/r/cowboys"><img src={redditPhoto} alt=""/></a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.reddit.com/r/cowboys">
                <h3>Cowboys Subreddit</h3>
              </a>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
            </div>
          </div>
          <div className="forum-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://cowboyszone.com/">
                <h3>Cowboys Zone Forum</h3>
              </a>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://cowboyszone.com/"><img src={czonePhoto} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Forums;
