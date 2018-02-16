import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTwitter } from '../actions'

import TwitterHandle from '../components/TwitterHandle'

class TwitterList extends Component {

  componentDidMount() {
    this.props.fetchTwitter();
  }

  renderTwitterHandles() {
      /* Randomize Twitter Handles everytime */
      let randomHandles = this.props.twitter.sort(() => Math.random() - 0.5) ;
      return (
        randomHandles.map((handle, index) => {
          return (
            <TwitterHandle handle={handle} key={index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TwitterList);
