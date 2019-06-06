// This is the navbar component
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Logo from "../../Images/Logo.png";

const NavbarContainer = styled.div`
  background-color: #ffffff;
  position: 0 0;
  margin: auto;
  padding-top: 15px;
  padding-right: 15%;
  padding-left: 15%;
  width: 70%;
  height: 125px;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled(Link)`
  background-image: url(${Logo});
  height: 180px;
  width: 120px;
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LinkList = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled(Link)`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: #666062;
  font-family: Freight Sans Pro Book;
  font-size: 20px;
  padding: 5px 5px;
  text-decoration: none;
  :hover {
    color: #f9b625;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer to='/' className='logo-container' />
      <LinkList>
        <Button to='/about'>About</Button>
        <Button to='/map'>Map</Button>
        <Button to='/kingdom'>Kingdom</Button>
        <Button to='/calendar'>Calendar</Button>
        <Button to='/gallery'>Gallery</Button>
      </LinkList>
    </NavbarContainer>
  );
};

export default Navbar;
