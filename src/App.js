import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Navbar
            isLightOn={lightStatus}
            changeLightStatus={this.changeLightStatus}
          />
        </header>
      </div>
    );
  }
}

export default App;
