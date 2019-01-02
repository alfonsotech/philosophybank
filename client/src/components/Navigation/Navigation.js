import React from "react"
// import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import "./Navigation.css"
import Submit from '../../pages/Submit'

const submitResource = () => {
  console.log('submit resource button clicked');
}
const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Philosophy Rank <small>(beta)</small>  <p><small><small>Crowd-Sourced & Ranked Philosophy Resources</small></small></p></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
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
        <NavItem>
        <button onClick={() => submitResource()}  className='header-button'>Submit</button>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;
