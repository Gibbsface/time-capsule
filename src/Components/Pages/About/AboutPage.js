import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
const Info = styled.h1`
  font-size: 30 px;
  opacity: 3;
  width: 70%;
  text-align: center;
`;
class AboutPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Info>
          In this page, you will learn all about our interns/missionaries for
          the summer at Cru HQ.
        </Info>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
