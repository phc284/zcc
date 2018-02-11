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

              //  <UncontrolledDropdown nav inNavbar>
              //   <DropdownToggle nav caret>
              //     Options
              //   </DropdownToggle>
              //   <DropdownMenu >
              //     <DropdownItem>
              //       Option 1
              //     </DropdownItem>
              //     <DropdownItem>
              //       Option 2
              //     </DropdownItem>
              //     <DropdownItem divider />
              //     <DropdownItem>
              //       Reset
              //     </DropdownItem>
              //   </DropdownMenu>
              // </UncontrolledDropdown>
