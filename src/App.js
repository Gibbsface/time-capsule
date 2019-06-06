import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import "./App.css";
import LandingPage from "./Components/Pages/Landing/LandingPage";
import AboutPage from "./Components/Pages/About/AboutPage";
import MapPage from "./Components/Pages/Map/MapPage";
import KingdomPage from "./Components/Pages/Kingdom/KingdomPage";
import CalendarPage from "./Components/Pages/Calendar/CalendarPage";
import GalleryPage from "./Components/Pages/Gallery/GalleryPage";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: dark-gray;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
  }

  render() {
    return (
      <PageContainer className='page-container'>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <LandingPage {...props} />}
            />
            <Route path='/about' render={props => <AboutPage {...props} />} />
            <Route path='/map' render={props => <MapPage {...props} />} />
            <Route
              path='/kingdom'
              render={props => <KingdomPage {...props} />}
            />
            <Route
              path='/calendar'
              render={props => <CalendarPage {...props} />}
            />
            <Route
              path='/gallery'
              render={props => <GalleryPage {...props} />}
            />
          </Switch>
        </Router>
      </PageContainer>
    );
  }
}

export default App;
