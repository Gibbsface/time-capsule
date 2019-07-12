// This is the navbar component
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../Images/Logo.png";

const NavbarComponent = () => {
  return (
    <Navbar as={NavbarContainer} collapseOnSelect expand='lg'>
      <Navbar.Brand>
        <Button to='/'>HQ Summer Mission 2019</Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav navbar className='mr-auto'>
          <Nav.Item>
            <Button to='/about'>About</Button>
          </Nav.Item>
          <Nav.Item>
            <Button to='/map'>Map</Button>
          </Nav.Item>
          <Nav.Item>
            <Button to='/kingdom'>Kingdom</Button>
          </Nav.Item>
          <Nav.Item>
            <Button to='/calendar'>Calendar</Button>
          </Nav.Item>
          <Nav.Item>
            <Button to='/gallery'>Gallery</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <NavbarContainer className='navbar-container'>
    //   <LogoContainer to='/' />
    //   <LinkContainer>
    //     <Button to='/about'>About</Button>
    //     <Button to='/map'>Map</Button>
    //     <Button to='/kingdom'>Kingdom</Button>
    //     <Button to='/calendar'>Calendar</Button>
    //     <Button to='/gallery'>Gallery</Button>
    //   </LinkContainer>
    // </NavbarContainer>
  );
};

export default NavbarComponent;

const NavbarContainer = styled.div`
  background-color: #ffffff;
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-bottom: solid #f9b625;
  border-width: 4px;
`;

const LogoContainer = styled.div`
  background-image: url(${Logo});
  height: 67px;
  width: 130px;
  display: flex;
  justify-content: flex-start;
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;
`;
const LinkContainer = styled.div`
  background-color: transparent;
  display: flex;
  height: 80;
  justify-content: space-between;
`;
const Button = styled(Link)`
  background-color: transparent;
  border: 0px;
  border-right-style: solid;
  border-color: orange;
  cursor: pointer;
  color: #666062;
  padding: 0px 15px;
  text-decoration: none;
  :hover {
    color: #f9b625;
  }
`;
