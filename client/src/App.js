import React, { Component } from 'react';
import Header from "./components/Header";
import Websites from "./components/Websites";
import Forums from "./components/Forums";
import Twitter from "./components/Twitter";
import News from "./components/News";
import Footer from "./components/Footer";
import Info from "./components/Info";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <News />
        <Info />
        <Websites />
        <Forums />
        <Twitter />
        <Footer />
      </div>
    );
  }
}

export default App;
