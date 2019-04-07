import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import "./Header.css"

class Header extends Component {
  state = {
      url: ''
    }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Philosophy Bank <small><small>(beta)</small></small>  <p><small><small>Crowdsourced & Upv♥ted By You</small></small></p></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>

          <form onSubmit={this.props.handleFormSubmit(this.state.url)}>
            <input
              className="form-control"
              type="text"
              value={this.state.url}
              name="url"
              placeholder='Paste In URL'
              onChange={this.handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>

          </NavItem>
        </Nav>
      </Navbar>
      )
    }
  }

export default Header
