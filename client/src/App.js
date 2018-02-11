import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Info from './components/Info';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" history={history}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
