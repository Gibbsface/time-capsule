import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import ReactMapGL, { Marker } from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationPin from "../../Locations/LocationPins";
import LOCATIONS from "../../Locations/locations.json";
import MAP_STYLE from "../../../config/map_config.json";
import INTERNS from "../../Interns/Profile";
import styled from "@emotion/styled";
const Info = styled.h1`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  text-align: center;
  text-size: 20 px;
`;
const Intern = styled.h2`
  font-size: 10 px;
  opacity: 2;
  text-size: 20 px;
`;
const Bio = styled.p`
  transform: [{ rotate: '90deg'}];
`;

const GridContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  display: grid;

  padding: 1rem;

  grid-template-columns: repeat(3, 1fr);

  grid-row-gap: 1rem;
`;
class AboutPage extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 400,
      latitude: 39.381266,
      longitude: -97.922211,
      zoom: 3
    },
    popupInfo: null
  };
  _renderLocationMarker = (location, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={location.longitude}
        latitude={location.latitude}
      >
        <LocationPin
          size={20}
          onClick={() => this.setState({ popupinfo: location })}
        />
      </Marker>
    );
  };
  render() {
    return (
      <>
        <Navbar />
        <Info>
          In this page, you will learn all about our interns/missionaries for
          the summer at Cru HQ.
        </Info>
        <ReactMapGL
          mapStyle={MAP_STYLE.MAP_STYLE_LINK}
          mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {LOCATIONS.map(this._renderLocationMarker)}
        </ReactMapGL>
        <GridContainer>
          <div>
            <Intern>Jizhou</Intern>
            <Bio>
              This is my project. Testing Testing Testing Testing Testing
            </Bio>
          </div>
          <div>
            <Intern>Cole</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Callie</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Emily</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Intern>David</Intern> <Bio>txt</Bio>
          </div>
          <div>
            {" "}
            <Intern>Kellechi</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Justin</Intern> <Bio>txt</Bio>
          </div>
          <div>
            {" "}
            <Intern>Abi</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Laci</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Danny</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Brittany</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Johnny</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Intern>Donovan</Intern>
            <Bio>txt</Bio>
          </div>
        </GridContainer>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
