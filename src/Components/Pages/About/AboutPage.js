import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import ReactMapGL, { Marker } from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationPin from "../../Locations/LocationPins";
import LOCATIONS from "../../Locations/locations.json";
import MAP_STYLE from "../../../config/map_config.json";
import styled from "@emotion/styled";
import Jizhou_Image from "../../../Images/InternProfile/me.jpg";
import { red } from "ansi-colors";
const Jizhou = styled.div`
  background-image: url(${Jizhou_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Info = styled.h3`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  background-color: orange;
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
  background-color: orange;
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
          the summer at Cru HQ Summer Mission. This page includes information on
          where they come from, what department they work in at HQ, and other
          biographic information
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
            <Jizhou />
            <Intern>Jizhou</Intern>
            <Bio>
              Jizhou is an upcoming Senior studying Computer Science at Oakland
              University. He works in the DPS department.
            </Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Cole</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Callie</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Emily</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>David</Intern> <Bio>txt</Bio>
          </div>
          <div>
            {" "}
            <Jizhou />
            <Intern>Kellechi</Intern> <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Justin</Intern> <Bio>txt</Bio>
          </div>
          <div>
            {" "}
            <Jizhou />
            <Intern>Abi</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Laci</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Danny</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Brittany</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Johnny</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Donovan</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Jessica</Intern>
            <Bio>txt</Bio>
          </div>
          <div>
            <Jizhou />
            <Intern>Chun</Intern>
            <Bio>txt</Bio>
          </div>
        </GridContainer>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
