// This is the navbar component
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Logo from "../../Images/Logo.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";

class Navbar extends Component {
  state = {
    isOpen: true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <NavbarContainer>
        <MDBNavbarBrand>
          <Button to='/'>
            <strong>Cru HQ Summer Mission 2019</strong>
          </Button>
        </MDBNavbarBrand>
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen}>
          <LinkContainer left>
            <MDBNavItem>
              <Button to='/about'>About</Button>
            </MDBNavItem>
            <MDBNavItem>
              <Button to='/map'>Map</Button>
            </MDBNavItem>
            <MDBNavItem>
              <Button to='/kingdom'>Kingdom</Button>
            </MDBNavItem>
            <MDBNavItem>
              <Button to='/calendar'>Calendar</Button>
            </MDBNavItem>
            <MDBNavItem>
              <Button to='/gallery'>Gallery</Button>
            </MDBNavItem>
          </LinkContainer>
        </MDBCollapse>
      </NavbarContainer>
    );
  }
}

export default Navbar;

const NavbarContainer = styled(MDBNavbar)`
  background-color: #ffffff;
  margin: 0;
  width: 100%;
  border-bottom: solid #f9b625;
  border-width: 4px;
  justify-content: flex-start !important;
`;

const LogoContainer = styled(MDBNavbarBrand)`
  background-image: url(${Logo});
  height: 180px;
  width: 120px;
  display: flex;
  justify-content: flex-start;
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 630px) {
    display: none;
  }
`;
const LinkContainer = styled(MDBNavbarNav)`
  display: flex;
  flex-direction: row;
`;
const NavCollapse = styled(MDBCollapse)`
  isopen: true;
`;
const Button = styled(MDBNavLink)`
  cursor: pointer;
  color: #666062;
  padding: 0 10px !important;
  text-decoration: none;
  :hover {
    color: #f9b625;
  }
`;
