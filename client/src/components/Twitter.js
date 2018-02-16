import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';


class Twitter extends Component {

  renderTwitterHandles() {
      let randomHandles = this.props.handles.sort(() => Math.random() - 0.5) ;
      return (
        randomHandles.map((handle, index) => {
          return (
            <div className="twitter-profile" key={index}>
              <img src={handle.img_url} alt=""/>
              <div>
                {handle.name}
                <Follow
                username={handle.username}
                />
              </div>
            </div>
          )
      })
    )
  }


  render() {
    return (
      <div className="twitter">
        <div className="twitter-container">
          <h2>Who to Follow</h2>
          {this.renderTwitterHandles()}
        </div>
      </div>
    );
  }
}


export default Twitter;
