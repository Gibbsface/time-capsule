import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import styled from "@emotion/styled";

const PageContainer = styled.div``;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
`;

class App extends Component {
  state = {
    lightStatus: false
  };

  changeLightStatus = () => {
    this.setState({
      lightStatus: !this.state.lightStatus
    });
  };

  render() {
    const { lightStatus } = this.state;

    return (
      <PageContainer>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </PageContainer>
    );
  }
}

export default App;
