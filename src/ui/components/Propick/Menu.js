import React, { Component } from 'react'
import './../../css/menu.css'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
export default class Menu extends Component {
    render() {
        return (
            <div id="Menu">
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav >
                            <NavItem eventKey={1} href="/propick/#howgood" activeClassName="active-link">How Good</NavItem>
                            <NavItem eventKey={2} href="/propick/#howto" activeClassName="active-link">How To</NavItem>
                            <NavItem eventKey={3} href="/propick/#service" activeClassName="active-link">How Services</NavItem>
                            <NavItem eventKey={4} href="/propick/#contactus" activeClassName="active-link">Contact Us</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}