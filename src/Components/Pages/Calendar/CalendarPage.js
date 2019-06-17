import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Swipe from "react-swipeable-views";
const Info = styled.h3`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  background-color: orange;
  text-align: center;
  text-size: 20 px;
`;
export default class CalendarPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Info>
          In this page, you will keep track of all the events and outreaches
          that happened with our 2019 summer intern team.
        </Info>
        <Swipe enableMouseEvents>
          <div>Week 1</div>
          <div>Week 2</div>
          <div>Week 3</div>
        </Swipe>
        <Footer />
      </>
    );
  }
}
