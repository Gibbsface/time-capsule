import React, { Component } from "react";
import "./App.css";
//import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/Body/LandingPage";
//import styled from "@emotion/styled";

// const PageContainer = styled.body`
//   width: 100%;
//   height: 100%;
//   background: #ffffff;
// `;

class App extends Component {
  render() {
    return (
      <body>
        <LandingPage />
      </body>
    );
  }
}

export default App;
