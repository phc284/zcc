import React, { Component }from 'react';

import List from 'material-ui/List';

import { connect } from 'react-redux';

import axios from 'axios';

class Stats extends Component {
  componentDidMount() {
    axios.get('/api/teamstats');
  }

  render(){
    return (
      <div className="stats">
        <List className="">
        </List>
        <List className="">
        </List>
        <List className="">
        </List>
      </div>
    )
  }
}

function mapStateToProps({ schedule }) {
  return schedule
}


export default connect(mapStateToProps)(Stats);
