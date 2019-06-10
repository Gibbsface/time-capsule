// This is the Footer Component
import React from "react";
import styled from "@emotion/styled";
import Fb from "../../Images/fb_logo.png";
import Ig from "../../Images/ig_logo.png";

const FooterContainer = styled.div`
  background-color: #666062;
  height: 60px;
`;

const Bar = styled.hr`
  border: 3px solid white;
  margin: 0px;
`;

const Copyright = styled.div`
  color: #ffffff;
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
  height: 40px;
  padding-top: 20px;
  font-size: 13px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.div``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FbLogo = styled.div`
  background-image: url(${Fb});
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;

  height: 14px;
  width: 14px;

  padding: 5px;
  margin-right: 5px;

  border: solid #f9b625;
  border-radius: 9999px;
  border-width: 2px;
`;

const InstaLogo = styled.div`
  background-image: url(${Ig});
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;

  height: 17px;
  width: 17px;

  padding: 3.5px;

  border: solid #f9b625;
  border-radius: 9999px;
  border-width: 2px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Bar />
      <Copyright>
        <Text>© 2019 Cru. All Rights Reserved.</Text>
        <SocialContainer>
          <FbLogo />
          <InstaLogo />
        </SocialContainer>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
