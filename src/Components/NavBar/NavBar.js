// This is the navbar component
import React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  background-color: #ffffff;
  position: 0 0;
  margin: auto;
  padding-top: 15px;
  padding-right: 15%;
  padding-left: 15%;
  width: 70%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
`;

const LinkList = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
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
  :
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>Pretend there's a logo here</LogoContainer>
      <hr />
      <LinkList>
        <Button>Map</Button>
        <Button>Florida</Button>
        <Button>Kingdom</Button>
        <Button>Calendar</Button>
        <Button>Gallery</Button>
      </LinkList>
    </NavbarContainer>
  );
};

export default Navbar;
