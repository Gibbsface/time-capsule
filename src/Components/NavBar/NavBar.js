// This is the navbar component
import React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  background-color: #ffffff;
  position: 0% 50%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  height: 100px;
`;

const Button = styled.button`
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: #666062;
  font-family: Freight Sans Pro Book;
  font-size: 20px;
  padding: 0px 0px;
  text-decoration: none;
  :hover {
    color: #f9b625;
  }
`;

const LinkList = styled.div`
  color: red;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Pretend there's a logo here</div>
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
