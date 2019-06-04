// This is the navbar component
import React from "react";
import styled from "@emotion/styled";

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
`;

const ButtonTwo = styled(Button)`
  width: 50px;
`;

const Navbar = ({ isLightOn, changeLightStatus }) => {
  const NavbarContainer = styled.div`
    background-color: ${isLightOn ? "yellow" : "grey"};
  `;
  return (
    <NavbarContainer>
      <Link1>Home</Link1>
      <Link2>About</Link2>
      <Link3>Other</Link3>

      <Button onClick={() => console.log(isLightOn)}>Button 1</Button>
      <ButtonTwo
        onClick={() => {
          changeLightStatus();
        }}
      >
        {isLightOn ? <span>Turn Off</span> : <span>Turn On</span>}
      </ButtonTwo>
    </NavbarContainer>
  );
};

export default Navbar;
