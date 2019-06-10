// This is the Footer Component
import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background-color: #666062;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
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
