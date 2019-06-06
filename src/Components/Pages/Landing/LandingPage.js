// This is the Landing Page Component
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import React, { Component } from "react";
import SunriseImage from "../../../Images/Sunrise.jpeg";
import styled from "@emotion/styled";

const LandingPagePicture = styled.div`
  background-image: url(${SunriseImage});
  height: 500px;
  background-position: center;
  background-origin: content-box;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
`;

const MissionText = styled.p`
  opacity: 1;
  color: white;
  font-size: 24px;
`;

class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <LandingPagePicture>
          <MissionText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </MissionText>
        </LandingPagePicture>
        <Footer />
      </>
    );
  }
}
export default LandingPage;
