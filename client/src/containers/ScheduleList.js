import React, { Component }from 'react';
import ScheduleItem from '../components/ScheduleItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSchedule } from '../actions'

class ScheduleList extends Component {
  componentDidMount(){
    this.props.fetchSchedule()
  }

  renderSchedule() {
    let schedule = this.props.schedule;
    if(schedule){
      return schedule.map((game, index) => {
        return (
          <ScheduleItem game={game} key={index}/>
        )
      })  
    }
  }

  render(){
    return (
      <div className="schedule">
        {this.renderSchedule()}
      </div>
    )
  }
}

function mapStateToProps({ schedule }) {
  return schedule
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSchedule }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleList);
