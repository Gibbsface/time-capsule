import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import styled from "@emotion/styled";

const PageContainer = styled.body`
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

class App extends Component {
  render() {
    //const { lightStatus } = this.state;

    return (
      <PageContainer>
        <LandingPage />
      </PageContainer>
    );
  }
}

export default App;
