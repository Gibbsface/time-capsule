import React, { Component } from "react";
import styled from "@emotion/styled";
import _ from "lodash";

import ReactMapGL from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import MAP_STYLE from "../../../config/map_config.json";
import "mapbox-gl/dist/mapbox-gl.css";

import Memories from "../../../Directory/memories.js";

import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import MemoryCard from "./Subcomponents/MemoryCard";

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
        <PageContainer>
          <MapContainer>
            <ReactMapGL
              mapStyle={MAP_STYLE.MAP_STYLE_LINK}
              mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}
            />
            <CardContainer>
              {_.map(Memories, memory => {
                return <MemoryCard cardData={memory} key={memory.id} />;
              })}
            </CardContainer>
          </MapContainer>
        </PageContainer>
        <Footer />
      </>
    );
  }
}

export default MapPage;

const PageContainer = styled.div`
  background-color: #666062;
  position: 0 0;
  margin: auto;
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
  padding-top: 15px;

  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  overflow: auto;
  width: 40%;
  margin-left: 10px;
`;
