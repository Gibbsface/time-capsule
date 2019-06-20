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
<<<<<<< HEAD
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
=======
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
            <Intern>Jizhou Zhang</Intern>
            <Bio>
              Jizhou is from Rochester Hills of Metro Detroit, Michigan. He's a
              computer science major from Oakland University. He works in the
              Digital Product and Service department.
            </Bio>
          </div>
          <div>
            <Cole />
            <Intern>Cole Gibbs</Intern>
            <Bio>
              Cole is from Houston, Texas. He goes to the University of Houston.
              He is a computer science major and works in the Digital Product
              and Service department of HQ.
            </Bio>
          </div>
          <div>
            <Callie />
            <Intern>Callie Philpott</Intern>{" "}
            <Bio>
              Callie is from Columbia, South Carolina. She goes to Clemson
              University. She is a communication major and is part of the
              communication team at HQ.
            </Bio>
          </div>
          <div>
            <Emily />
            <Intern>Emily Richards</Intern>{" "}
            <Bio>
              Emily is from Davidson, North Carolina. She is a marketing major
              and part of the marketing department at HQ. She goes to Anderson
              University.
            </Bio>
          </div>
          <div>
            <David />
            <Intern>David Yue</Intern>{" "}
            <Bio>
              David is from Elkridge, Maryland. He is part of the DPS department
              and an information system major. He studies at UMBC.{" "}
            </Bio>
          </div>
          <div>
            {" "}
            <Kellechi />
            <Intern>Kellechi Chillis-Ihenko</Intern>{" "}
            <Bio>
              Kellechi is from Buffalo, New York. He goes to the University of
              Buffalo. He is a marketing major who works in the marketing
              department.
            </Bio>
          </div>
          <div>
            <Justin />
            <Intern>Justin Ward</Intern>{" "}
            <Bio>
              Justin is from San Diego, California. Justin is a accounting major
              from the San Diego State University and is part of the financial
              service group in accounting department at HQ.
            </Bio>
          </div>
          <div>
            {" "}
            <Abi />
            <Intern>Abigail Gordon</Intern>
            <Bio>
              Abi is from Georgia. She studies information technology at Georgia
              Southern University. She works in the DPS department.
            </Bio>
          </div>
          <div>
            <Laci />
            <Intern>Laci Clark</Intern>
            <Bio>
              Laci is from Bristow, Virginia. She works in the communication
              department at HQ. She goes to Liberty University and a
              communication major.
            </Bio>
          </div>
          <div>
            <Danny />
            <Intern>Danny Rivers</Intern>
            <Bio>
              Danny is from San Luis Obispo, California. He is a computer
              science major from California Polytechnic State University. He
              works in the DPS department.
            </Bio>
          </div>
          <div>
            <Brittany />
            <Intern>Brittany B Jones</Intern>
            <Bio>
              Brittany is from Chicago, Illinois. She is a marketing major at
              Harper College. She is part of the marketing department.
            </Bio>
          </div>
          <div>
            <Johnny />
            <Intern>Johnny Lam</Intern>
            <Bio>
              Johnny is from Stow, Ohio. He is an audio engineering major at
              Kent State University. He is part of the Jesus Film team at HQ.
            </Bio>
          </div>
          <div>
            <Donovan />
            <Intern>Donovan Campbell</Intern>
            <Bio>Donovan is from Chengdu, Sichuan.</Bio>
          </div>
          <div>
            <Jessica />
            <Intern>Jessica</Intern>
            <Bio>
              Jessica is from Davis, California. She studies Cinema and Digital
              Media at the University of California, Davis and is part of the
              Marketing team.
            </Bio>
          </div>
          <div>
            <Chun />
            <Intern>Chun</Intern>
            <Bio>
              Chun is from Kaohsiung, Taiwan. He majored in accounting and
              finance at Cal State San Bernardino. He works for the Financial
              Service group in the Ministry Finance department.
            </Bio>
          </div>
        </GridContainer>
>>>>>>> 045b54da6e201ad34dbfd462d690970fe99f7f6f
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
