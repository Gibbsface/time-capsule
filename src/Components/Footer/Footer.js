// This is the Footer Component
import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background-color: #ffffff;
  position: 0% 50%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  height: 100px;
`;

// const LinkList = styled.div`
//   color: red;
// `;

const Footer = () => {
  return (
    <FooterContainer>
      <hr />
      <div>Pretend that there is copyright info here</div>
    </FooterContainer>
  );
};

export default Footer;
