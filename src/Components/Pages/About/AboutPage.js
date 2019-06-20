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
import _ from "lodash";

import InternList from "../../../Directory/Interns/interns.js";
import InternCard from "../About/Subcomponents/InternCard.js";

// These are the supporting styled tags

class AboutPage extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 700,
      latitude: 39.381266,
      longitude: -97.922211,
      zoom: 3
    },
    popupInfo: null
  };
  _renderLocationMarker = data => {
    return (
      <Marker key={data.id} longitude={data.longitude} latitude={data.latitude}>
        <LocationPin
          size={20}
          onClick={() => this.setState({ popupinfo: data })}
        />
      </Marker>
    );
  };
  render() {
    return (
      <>
        <Navbar />
        <PageContainer>
          <Info>
            In this page, you will learn all about our interns/missionaries for
            the summer at Cru HQ Summer Mission. This page includes information
            on where they come from, what department they work in at HQ, and
            other biographic information
          </Info>
          <MapContainer>
            <ReactMapGL
              mapStyle={MAP_STYLE.MAP_STYLE_LINK}
              mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}
            >
              {LOCATIONS.map(this._renderLocationMarker)}
            </ReactMapGL>
          </MapContainer>
          <CardContainer>
            {_.map(InternList, intern => {
              return <InternCard cardData={intern} key={intern.id} />;
            })}
          </CardContainer>
        </PageContainer>
        <Footer />
      </>
    );
  }
}
export default AboutPage;

const CardContainer = styled.div`
  columns: 3;
  column-gap: 10px;
  overflow: scroll;
`;

const Info = styled.h3`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  background-color: orange;
  text-align: center;
  text-size: 20 px;
`;

const MapContainer = styled.div`
  padding-bottom: 10px;
`;

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
