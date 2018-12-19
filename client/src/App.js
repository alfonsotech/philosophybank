import React, { Component } from 'react';
import Resources from './components/Resources'
import Footer from './components/Footer'
import Navigation from "./components/Navigation"

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
        <Resources />
        <Footer />
      </div>
    );
  }
}

export default App;
