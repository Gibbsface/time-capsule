import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Swipe from "react-swipeable-views";
import photo from "../../../Directory/memories.js";
import weekdata from "../../../Directory/memories.json";
import _ from "lodash";
import Layout from "./Layout.js";
//const Weeks = data;
const NumOfWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Weeks = weekdata.Memories;
const Info = styled.h3`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  background-color: orange;
  text-align: center;
  text-size: 20 px;
`;
const Record = styled.div`
  width: 100%;
  height: 600px;
  background-color: cyan;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top-style: double;
  border-top-width: 20px;
  border-bottom-style: double;
  border-bottom-width: 20px;
  border-right-style: double;
  border-right-width: 10px;
  border-left-style: double;
  border-left-width: 10px;
  border-color: #116891;
`;
const Columntext = styled.div`
  column-count: 2;
  column-gap: 40px;
  column-rule-style: solid;
`;
export default class CalendarPage extends Component {
  createTable = () => {
    let Array = [];
    /* _.map(Weeks, week => {
      Array.push(
        <>
          <Record key={week.id}>
            <h1>{week.title}</h1>
            <Columntext>
              {week.bio}
              <Layout picture={week} key={week.id} />
            </Columntext>
          </Record>
        </>
      );
    });*/
    _.map(NumOfWeeks, num => {
      Array.push(
        <>
          <Record>
            <h1>Week {num}</h1>
            {_.map(Weeks, time => {
              return num === time.week ? (
                <Columntext>{time.story}</Columntext>
              ) : null;
            })}
          </Record>
        </>
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
