import React, { Component } from 'react';
import Homepage from './containers/Homepage';
import './css/homepage.css';
import './css/info.css';
import Info from './containers/Info';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';


const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      handles: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.all([this.getArticles(), this.getTwitterHandles()])
      .then (axios.spread((articles, handles) => {
        this.setState({
          articles: articles.data,
          handles: handles.data
        })
      }))
  }

  getArticles() {
    return axios.get('/api/news')
  }
  getTwitterHandles() {
    return axios.get('/api/twitter')
  }


  render() {
    console.log('app', this.state.articles)
    return (
      <Router>
        <div className="App" history={history}>
          <Navbar />
          <Route exact path='/' render={() => <Homepage articles={this.state.articles} handles={this.state.handles}/>}/>
          <Route exact path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
