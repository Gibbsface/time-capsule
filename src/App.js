import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Components/Body/LandingPage";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;

class App extends Component {
  render() {
    return (
      <PageContainer>
        <LandingPage />
      </PageContainer>
    );
  }
}

export default App;
