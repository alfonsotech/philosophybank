import React, { Component } from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
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

  handleFormSubmit = event => {
    event.preventDefault()
    console.log('this.state', this.state);
    const {url, upvotes, views} = this.state

    axios.post('/api/resources', {url, upvotes, views})
    .then( data => {
            console.log('form submitted, the following resource was added:', data)
            this.setState({
                url: '',
                upvotes: 1,
                views: 0
            })
            this.props.history.push('/')
          });
  }

  render() {
    // console.log('this.props', this.props);
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Philosophy Rank <small>(beta)</small>  <p><small><small>Crowd-Sourced & Ranked Philosophy Resources</small></small></p></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem>
            <div className="Submit">
              <form onSubmit={this.handleFormSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.url}
                    name="url"
                    placeholder='Submit URL'
                    onChange={this.handleInputChange}
                    required
                  />
              </form>
            </div>
            </NavItem>
              <NavItem eventKey={1} href="mailto:thinkphilosophy@nym.hush.com?Subject=Inquiry%20About%20PPP">
                <FontAwesome
                  className='nav-social-button'
                  name='envelope'
                  size='lg'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
              </NavItem>
              <NavItem eventKey={2}
                href="https://medium.com/@tPhilosophia"
                target="_blank"
                rel="noopener noreferrer">
              <FontAwesome
                className='nav-social-button'
                name='medium'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              </NavItem>
              <NavItem eventKey={3}
                href="https://twitter.com/tPhilosophia"
                target="_blank"
                rel="noopener noreferrer"
                >
              <FontAwesome
                className='nav-social-button'
                name='twitter'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }


export default Header
