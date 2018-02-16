import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTwitter } from '../actions'


class Twitter extends Component {

  componentDidMount() {
    this.props.fetchTwitter();
  }

  renderTwitterHandles() {
      let randomHandles = this.props.twitter.sort(() => Math.random() - 0.5) ;
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

function mapStateToProps({ twitter }) {
  return twitter
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTwitter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
