import React, { Component } from 'react'
import './../../css/menu.css'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
export default class Menu extends Component {
    render() {
        return (
            <div id="proservice-menu">
                <Navbar fluid >
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <IndexLinkContainer to="/proservice" activeClassName="active-link">
                                <NavItem eventKey={1}>หน้าหลัก</NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to="/proservice/aboutus" activeClassName="active-link">
                                <NavItem eventKey={2}>เกี่ยวกับเรา</NavItem>
                            </LinkContainer>
                            <NavItem eventKey={3} href="/proservice/#proservice-service">บริการ</NavItem>
                            <NavItem eventKey={4} href="/proservice/#client">ลูกค้าธุรกิจ</NavItem>
                            <LinkContainer to="/proservice/career" activeClassName="active-link">
                                <NavItem eventKey={5}>ร่วมงานกับเรา</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav >
                            <NavItem eventKey={1} href="/proservice" activeClassName="active-link">หน้าหลัก</NavItem>
                            <NavItem eventKey={2} href="/proservice/aboutus" activeClassName="active-link">เกี่ยวกับเรา</NavItem>
                            <NavItem eventKey={3} href="/proservice/#service" activeClassName="active-link">บริการ</NavItem>
                            <NavItem eventKey={4} href="/proservice/#client" activeClassName="active-link">ลูกค้าธุรกิจ</NavItem>
                            <NavItem eventKey={5} href="/proservice/career" activeClassName="active-link">ร่วมงานกับเรา</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
            </div>
        )
    }
}