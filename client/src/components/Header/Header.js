import React, { Component } from 'react'
import axios from 'axios'
// import FontAwesome from 'react-fontawesome'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import "./Header.css"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      upvotes: 1,
      views: 0
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = history => {
    const {url, upvotes, views} = this.state

    axios.post('/api/resources', {url, upvotes, views})
    .then( data => {
        console.log('form submitted, the following resource was added:', data)
        this.setState({
            url: '',
            upvotes: 1,
            views: 0
        })
          history.push('/')
      });

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

              <form onSubmit={this.handleFormSubmit(this.props.history)}>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.url}
                    name="url"
                    placeholder='Paste In URL'
                    onChange={this.handleInputChange}
                    required
                  />
                  <button type="submit" onSubmit={this.handleFormSubmit(this.props.history)}>Submit</button>
              </form>

            </NavItem>
          </Nav>
        </Navbar>

      )
    }
  }

export default Header
