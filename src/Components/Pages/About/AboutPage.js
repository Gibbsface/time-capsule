import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import ReactMapGL, { Marker } from "react-map-gl";
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
const Bio = styled.p`
  font-size: 10 px;
  opacity: 2;
  width: 20%;
  text-align: left;
  text-size: 10 px;
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
        <Bio>
          <INTERNS />
        </Bio>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
