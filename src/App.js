import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import styled from "@emotion/styled";

const PageContainer = styled.body`
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

class App extends Component {
  // changeLightStatus = () => {
  //   this.setState({
  //     lightStatus: !this.state.lightStatus
  //   });
  // };

  render() {
    //const { lightStatus } = this.state;

    return (
      <PageContainer>
        <Navbar />
      </PageContainer>
    );
  }
}

export default App;
