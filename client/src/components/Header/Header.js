import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Header.css'



class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <section className="Header">

        <div className="header-text">
          <h1>Become A Philosopher</h1>
          <h4>OR JUST LEARN TO THINK LIKE ONE</h4>
        </div>
        {/* <RaisedButton className="get-started-button" label="Get Started" /> */}
      </section>
    </MuiThemeProvider>
    )
  }
}

export default Header
