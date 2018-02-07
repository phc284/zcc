import React, { Component } from 'react';
import Header from "./components/Header";
import Websites from "./components/Websites";
import Forums from "./components/Forums";
import Twitter from "./components/Twitter";
import News from "./components/News";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <News />
        <Websites />
        <Forums />
        <Twitter />
        <Footer />
      </div>
    );
  }
}

export default App;
