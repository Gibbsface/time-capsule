import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Swipe from "react-swipeable-views";
import data from "./dates.json";
import _ from "lodash";

const Weeks = data.Dates;
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
    let Array = [];
    _.map(Weeks, week => {
      Array.push(
        <Record key={week.id}>
          <h1>{week.title}</h1>
          <Columntext>{week.bio}</Columntext>
        </Record>
      );
    });
    return Array;
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
