import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import ReactMapGL, { Marker } from "react-map-gl";
import cellEditFactory, { Type } from "react-bootstrap-table-next";
import TOKEN from "../../../config/tokens.json";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationPin from "../../Locations/LocationPins";
import LOCATIONS from "../../Locations/locations.json";
import INTERNS from "../../Interns/Profile";
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
  text-align: left;
  text-size: 20 px;
`;
const Bio = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding-right: 10%;
  padding-left: 10%;
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
  componentDidMount() {
    console.log(TOKEN.MAPBOX_ACCESS_TOKEN);
  }
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
          mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {LOCATIONS.map(this._renderLocationMarker)}
        </ReactMapGL>
        <Intern>
          Jizhou
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Cole
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Callie
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Emily
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          David
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Kellechi
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Justin
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Abi
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Jessica
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Brittany
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Donovan
          <Bio>txt</Bio>
        </Intern>
        <Intern>
          Johnny
          <Bio>txt</Bio>
        </Intern>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
