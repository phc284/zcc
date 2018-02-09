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
            <a target="_blank" href="http://www.dallascowboys.com"><img src={redditPhoto} alt=""/></a>
            <p>This is the offical site of the Dallas Cowboys.</p>
          </div>
          <div className="forum-item">
            <p>This is the offical </p>
            <a target="_blank" href="http://www.bloggingtheboys.com"><img src={czonePhoto} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Forums;
