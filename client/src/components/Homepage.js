import React from 'react';
import Header from "../components/Header";
import Websites from "../components/Websites";
import Forums from "../components/Forums";
import TwitterList from "../containers/TwitterList";
import NewsList from "../containers/NewsList";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
      <div className="Homepage">
        <Header />
        <NewsList />
        <Websites />
        <Forums />
        <TwitterList />
        <Footer />
      </div>
    );
}


export default Homepage;
