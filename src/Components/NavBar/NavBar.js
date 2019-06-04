// This is the navbar component
import React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.div`
  background-color: red;
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
`;

const ButtonTwo = styled(Button)`
  width: 50px;
`;

const Navbar = ({ color }) => {
  return (
    <NavbarContainer>
      <Link1>Home</Link1>
      <Link2>About</Link2>
      <Link3>Other</Link3>

      <Button>Button 1</Button>
      <ButtonTwo>Button 2</ButtonTwo>
    </NavbarContainer>
  );
};

export default Navbar;
