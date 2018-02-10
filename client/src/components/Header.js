import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerText">
          <h1>Dallas Cowboys Fan Resource Page</h1>
          <h4>Find all of your online Dallas Cowboys needs</h4>
        </div>
        <a class="button" target="_blank" rel="noopener noreferrer" href="http://www.dallascowboys.com/sites/dallascowboys.com/files/bandwagonapp.pdf">Bandwagoners, Fill Out This Application</a>
      </div>
    );
  }
}

export default Header;
