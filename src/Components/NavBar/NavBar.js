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
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 0px;
  display: inline-block;
  cursor: pointer;
  color: #666062;
  font-family: Freight Sans Pro Book;
  font-size: 20px;
  padding: 0px 0px;
  text-decoration: none;
`;

const Link1 = styled.p`
  color: blue;
`;
const Link2 = styled.p`
  color: yellow;
`;
const Link3 = styled.p`
  color: green;
`;

const Button = styled.button`
  background: white;
  height: 30px;
  color: blue;
  :hover {
    background: yellow;
  }

  :hover {
    color: #f9b625;
  }
`;

const Navbar = ({ isLightOn, changeLightStatus }) => {
  const NavbarContainer = styled.div`
    background-color: ${isLightOn ? "yellow" : "grey"};
  `;
  return (
    <NavbarContainer>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Other</Button>
    </NavbarContainer>
  );
};

export default Navbar;
