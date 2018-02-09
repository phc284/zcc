import React, { Component } from 'react';
import cowboysOfficial from '../images/cowboysOfficial.png'
import bloggingBoys from '../images/bloggingtheboys.png'


class Websites extends Component {
  render() {
    return (
      <div className="websites">
        <div className="websites-layout">
          <h2> Websites </h2>
          <div className="website-item">
            <a target="_blank" href="http://www.dallascowboys.com"><img src={cowboysOfficial} alt=""/></a>
            <p>This is the offical website of the Dallas Cowboys. All of your basic need will be on this website </p>
          </div>
          <div className="website-item">
            <p>This is the offical </p>
            <a target="_blank" href="http://www.bloggingtheboys.com"><img src={bloggingBoys} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Websites;
