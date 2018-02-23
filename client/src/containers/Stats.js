import React, { Component }from 'react';

import DefListItem from '../components/StatListItem/DefListItem';
import OffListItem from '../components/StatListItem/OffListItem';
import STListItem from '../components/StatListItem/STListItem';
import TeamListItem from '../components/StatListItem/TeamListItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchStats } from '../actions'

class Stats extends Component {
  componentDidMount() {
    this.props.fetchStats()
  }

  render(){
    if (this.props.stats.teamStats) {
      return (
        <div className="stats">
          <TeamListItem stats={this.props.stats.teamStats}/>
          <OffListItem stats={this.props.stats.offStats}/>
          <DefListItem stats={this.props.stats.defStats}/>
          <STListItem stats={this.props.stats.stStats}/>
        </div>
      )
    } else {
      return (
        <div> Loading... </div>
      )
    }
  }
}

function mapStateToProps({ stats }) {
  return stats
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStats }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
