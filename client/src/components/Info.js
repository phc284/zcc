import React, { Component } from 'react';
import axios from 'axios';


class Info extends Component {
  componentDidMount() {
    axios.get('/api/schedule')
      .then((data) => {
        console.log('info', data)
      })
  }
  render() {
    return (
      <div className="info">
        COMING SOON
      </div>
    );
  }
}

export default Info;
