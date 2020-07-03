import React, { useState } from 'react';
import './Header.scss';
import {NavLink as RRNavLink} from 'react-router-dom'
import logoBubuEdu from '../../assets/img/BubuEdu.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} exact to='/'>
          <span> 
            <img className="header-logo" src={logoBubuEdu} alt=""/>
          </span>
          <span className="header-name">BubuEdu</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/'>Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Teachers
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  Create Teachers
                </DropdownItem>
                <DropdownItem>
                  All Teachers
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Courses
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem tag={RRNavLink} exact to='/courses/create'>
                  Create Courses
                </DropdownItem>
                <DropdownItem tag={RRNavLink} exact to='/courses'>
                  All Courses
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="mr-4">
            <Button color="success">Sign up</Button>
          </div>
          <div>
            <Button color="warning">Login</Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;