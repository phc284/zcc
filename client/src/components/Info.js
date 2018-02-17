import React, { Component } from 'react';
import axios from 'axios';

import Schedule from '../containers/ScheduleList';
import Footer from "../components/Footer";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Schedule />
        <Footer />
      </div>
    );
  }
}

export default Info;
