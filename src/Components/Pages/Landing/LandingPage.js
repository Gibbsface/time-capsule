// This is the Landing Page Component
import NavbarComponent from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import React, { Component } from "react";
import SunriseImage from "../../../Images/Landing.jpg";
import styled from "@emotion/styled";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const HomePage = styled.div`
  background-image: url(${SunriseImage});
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: 100px;

  height: 600px;
`;

const Welcome = styled.div`
  text-align: center;
  font-size: 50px;
  color: #ffffff;
`;

const IntroText = styled.div`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-style: italic;
`;

const Box = styled.div`
  height: 250px;
`;

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer className='landing-page-container'>
        <NavbarComponent />
        <HomePage>
          <Box />
          <Welcome>Welcome</Welcome>
          <IntroText>Cru HQ Summer Internship 2019</IntroText>
          <Box />
        </HomePage>
        <Footer />
      </LandingPageContainer>
    );
  }
}
export default LandingPage;
