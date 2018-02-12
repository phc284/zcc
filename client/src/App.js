import React, { Component } from 'react';
import Homepage from './containers/Homepage';
import Info from './containers/Info';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';
import './css/homepage.css';
import './css/info.css';

const history = createBrowserHistory();

class App extends Component {
  componentDidMount () {
    // axios.get('/api/info')
    //   .then((data) => {
    //     console.log('Team Info');
    //   });
    //
    // axios.get('/api/teamstats')
    //   .then((data) => {
    //     console.log('Team Info');
    //   });
  }
  render() {
    return (
      <Router>
        <div className="App" history={history}>
          <Navbar />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
