import React from "react"
// import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import "./Navigation.css"

const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Public Philosophy Platform <small>(beta)</small></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/topics">
          Topics
        </NavItem>
        <NavItem eventKey={3} href="/paths">
          Paths
        </NavItem>
        {/* <NavItem eventKey={2} href="/tribes">
          Tribes
        </NavItem> */}
        <NavItem eventKey={4} href="/submit">
          Submit
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={5} href="mailto:thinkphilosophy@nym.hush.com?Subject=Inquiry%20About%20PPP">
          <FontAwesome
            className='nav-social-button'
            name='envelope'
            size='lg'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </NavItem>
        <NavItem eventKey={6}
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
        <NavItem eventKey={7}
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

export default Navigation;
