import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/info">Info</Link></div>
      </div>
    );
}

export default NavBar;
