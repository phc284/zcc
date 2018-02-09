import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

class Twitter extends Component {

  constructor() {
    super();
    this.state = {
      twitter: []
    }
  }


  render() {
    return (
      <div className="twitter">
        <div className="twitter-container">
        <h2>Who to Follow</h2>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
          <div className="twitter-profile">
            <img src="https://pbs.twimg.com/profile_images/830458087635087361/cUvS_UJU_400x400.jpg" alt=""/>
            <div>
              David Helman
              <Follow username="HelmanDC"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Twitter;
