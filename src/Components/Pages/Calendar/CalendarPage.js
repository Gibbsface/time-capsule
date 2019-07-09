import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Swipe from "react-swipeable-views";
import data from "../../../Directory/memories.json";

const NumOfWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mems = data.Memories;

export default class CalendarPage extends Component {
  createTable = () => {
    let Array = [];
    NumOfWeeks.map(num => {
      Array.push(
        <WeekContainer key={"week" + num}>
          <WeekTitle>Week {num}</WeekTitle>
          <WeekContent>
            {mems.map(m => {
              return num === m.week ? (
                <Story key={"text" + m.id}>
                  <h2>{m.title}</h2>
                  <p>{m.story}</p>
                </Story>
              ) : null;
            })}
          </WeekContent>
        </WeekContainer>
      );
      return null;
    });
    return Array;
  };
  render() {
    return (
      <>
        <Navbar />
        <Info>Swipe to see the different weeks</Info>
        <Scrapbook>
          <Swipe enableMouseEvents>{this.createTable()}</Swipe>
        </Scrapbook>
        <Footer />
      </>
    );
  }
}

const WeekTitle = styled.div`
  color: #666062;
  margin: 0;
  padding: 1em 0;
  font-size: 30px;
  font-style: bold;
`;

const WeekContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  margin-left: 7%;
  margin-right: 7%;
  width: 86%;
  padding: 0px;
`;

const Story = styled.div`
  background-color: white;
  padding-left: 5px;
  border-left: solid #3eb1c8 3px;
  margin: 5px;
  border-radius: 3px;
  transition: 0.25s ease;
  :hover {
    border-left: solid #3eb1c8 8px;
    margin-left: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  :first-of-type {
    flex-grow: 2;
  }

  @media all and (min-width: 600px) {
    flex-basis: 50%;
    padding-right: 10px;
    :first-of-type {
      flex-basis: 100%;
    }
  }

  @media all and (min-width: 1000px) {
    flex-basis: 33%;
    :first-of-type {
      flex-basis: 66%;
    }
  }

  @media all and (min-width: 1200px) {
    flex-basis: 25%;
    :first-of-type {
      flex-basis: 50%;
    }
  }
`;

const Scrapbook = styled.div`
  width: 86%;
  margin-left: 7%;
  margin-right: 7%;
`;

const Info = styled.div`
  font-size: 20 px;
  margin: 0 7%;
  margin-top: 1em;
  width: 86%;

  color: white;
  text-align: center;
  font-style: italic;
`;

const WeekContainer = styled.div`
  width: 100%;
  padding-bottom: 3em;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #dd7d1b;
  border-radius: 3px;
`;
