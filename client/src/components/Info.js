import React, { Component } from 'react';

import Schedule from '../containers/ScheduleList';
import Stats from '../containers/Stats';
import Footer from "../components/Footer";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Schedule />
        <Stats />
        <Footer />
      </div>
    );
  }
}

export default Info;
