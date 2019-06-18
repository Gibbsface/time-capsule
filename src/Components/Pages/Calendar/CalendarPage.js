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
const Record = styled.div`
  padding: 15;
  width: 100%;
  height: 300px;
  background-color: tan;
`;
const Columntext = styled.div`
  column-count: 2;
  column-gap: 40px;
  column-rule-style: solid;
`;
export default class CalendarPage extends Component {
  createTable = () => {
    let table = [];
    for (let i = 0; i < 9; i++) {
      table.push(
        <Record>
          <h1>{`Week ${i + 1}`}</h1>
          <Columntext>
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing testing testing testing
            testing testing testing testing testing
          </Columntext>
        </Record>
      );
    }
    return table;
  };
  render() {
    return (
      <>
        <Navbar />
        <Info>
          In this page, you will keep track of all the events and outreaches
          that happened with our 2019 summer intern team.
        </Info>
        <Swipe enableMouseEvents>{this.createTable()}</Swipe>
        <Footer />
      </>
    );
  }
}
