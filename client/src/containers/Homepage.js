import React, { Component } from 'react';
import Header from "../components/Header";
import Websites from "../components/Websites";
import Forums from "../components/Forums";
import Twitter from "../components/Twitter";
import News from "../components/News";
import Footer from "../components/Footer";


class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
        <Header />
        <News articles={this.props.articles}/>
        <Websites />
        <Forums />
        <Twitter handles={this.props.handles}/>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
