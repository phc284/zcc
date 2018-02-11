import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/info">Info</Link></div>
      </div>
    );
  }
}
