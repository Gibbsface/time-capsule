// This is the Footer Component
import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background-color: #666062;
  position: 0% 50%;
  margin-left: auto;
  margin-right: auto;
  height: 80px;

  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
`;

const Copyright = styled.div`
  color: #ffffff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>Pretend that there is copyright info here</Copyright>
    </FooterContainer>
  );
};

export default Footer;
