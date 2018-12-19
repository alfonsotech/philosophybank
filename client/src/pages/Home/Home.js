import React, { Component } from "react";
import './Home.css';
import Header from '../../components/Header'
import Overview from '../../components/Overview'
import Motivation from '../../components/Motivation'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Overview />
        <Motivation />
      </div>
    );
  }
}

export default Home;
