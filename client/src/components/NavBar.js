import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navbar">
        <button>Home</button>
        <button>Scores/Stats</button>
      </div>
    );
  }
}
