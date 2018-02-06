import React, { Component } from 'react';
import Header from "./components/Header";
import Websites from "./components/Websites";
import Forums from "./components/Forums";
import Twitter from "./components/Twitter";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Websites />
        <Forums />
        <Twitter />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
