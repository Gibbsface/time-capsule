import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import ReactMapGL, { Marker } from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import "mapbox-gl/dist/mapbox-gl.css";
import MAP_STYLE from "../../../config/map_config.json";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Dimensions from "react-dimensions";

import { Interns } from "../../../Directory/Interns/interns.json";
import InternCard from "../About/Subcomponents/InternCard.js";

// These are the supporting styled tags

class AboutPage extends Component {
  state = {
    viewport: {
      width: "60%",
      height: "700px",
      latitude: 39.333212686504076,
      longitude: -96.54699526694483,
      zoom: 3.5
    },
    popupInfo: null
  };

  render() {
    return (
      <>
        <PageContainer>
          <Navbar />
          <ContentContainer>
            <MapContainer>
              <ReactMapGL
                mapStyle={MAP_STYLE.MAP_STYLE_LINK}
                mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
                width='100%'
                height='690px'
                latitude={39.333212686504076}
                longitude={-96.54699526694483}
                zoom={3.5}
                scrollZoom={false}
              >
                {Interns.map(pin => {
                  if (pin.latitude && pin.longitude) {
                    return (
                      <Marker
                        key={pin.id}
                        latitude={pin.latitude}
                        longitude={pin.longitude}
                        offsetTop={-16}
                        offsetLeft={-6}
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </Marker>
                    );
                  } else {
                    return null;
                  }
                })}
              </ReactMapGL>
            </MapContainer>
            <CardContainer>
              {Interns.map(intern => {
                return <InternCard cardData={intern} key={intern.id} />;
              })}
            </CardContainer>
          </ContentContainer>
          <Footer />
        </PageContainer>
      </>
    );
  }
}
export default AboutPage;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  width: 40%;
  margin-left: 10px;
  align-content: stretch;
`;

const Info = styled.h3`
  font-size: 20 px;
  opacity: 3;
  width: 100%;
  background-color: orange;
  text-align: center;
  text-size: 20 px;
  :after {
    display: flex;
    justify-content: center;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  width: 86%;
  height: 690px;
`;

const PageContainer = styled.div`
  background-color: #666062;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
