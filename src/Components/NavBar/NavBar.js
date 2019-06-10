// This is the navbar component
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Logo from "../../Images/Logo.png";

const NavbarContainer = styled.div`
  background-color: #ffffff;
  margin: 0;
  padding-top: 15px;
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
  height: 125px;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled(Link)`
  background-image: url(${Logo});
  height: 180px;
  width: 120px;
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
  justify-content: space-between;
`;

const Button = styled(Link)`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: #666062;
  font-size: 30px;
  padding: 10px;
  text-decoration: none;
  :hover {
    color: #f9b625;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer className='navbar-container'>
      <LogoContainer to='/' />
      <LinkContainer>
        <Button to='/about'>About</Button>
        <Button to='/map'>Map</Button>
        <Button to='/kingdom'>Kingdom</Button>
        <Button to='/calendar'>Calendar</Button>
        <Button to='/gallery'>Gallery</Button>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
