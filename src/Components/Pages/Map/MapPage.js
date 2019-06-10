import React, { Component } from "react";
import styled from "@emotion/styled";

import ReactMapGL from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import MAP_STYLE from "../../../config/map_config.json";
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const MapContainer = styled.div`
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
`;

class MapPage extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 700,
      latitude: 28.3921,
      longitude: -81.2825,
      zoom: 8
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <MapContainer>
          <ReactMapGL
            mapStyle={MAP_STYLE.MAP_STYLE_LINK}
            mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
            {...this.state.viewport}
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </MapContainer>
        <Footer />
      </>
    );
  }
}

export default MapPage;
