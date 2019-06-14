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
import Cole_Image from "../../../Images/InternProfile/cole.jpg";
import Callie_Image from "../../../Images/InternProfile/callie.jpg";
import David_Image from "../../../Images/InternProfile/david.jpg";
import Emily_Image from "../../../Images/InternProfile/emily.jpg";
import Johnny_Image from "../../../Images/InternProfile/johnny.jpg";
import Justin_Image from "../../../Images/InternProfile/justin.jpg";
import Jessica_Image from "../../../Images/InternProfile/jessica.jpg";
import Kellechi_Image from "../../../Images/InternProfile/kellechi.jpg";
import Chun_Image from "../../../Images/InternProfile/chun.jpg";
import Brittany_Image from "../../../Images/InternProfile/brittany.jpg";
import Dan_Image from "../../../Images/InternProfile/dan.jpg";
import Laci_Image from "../../../Images/InternProfile/laci.jpg";
import Abi_Image from "../../../Images/InternProfile/abi.jpg";
import Donovan_Image from "../../../Images/InternProfile/donovan.jpg";
//import { red } from "ansi-colors";
const Jizhou = styled.div`
  background-image: url(${Jizhou_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Cole = styled.div`
  background-image: url(${Cole_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Jessica = styled.div`
  background-image: url(${Jessica_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Donovan = styled.div`
  background-image: url(${Donovan_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Callie = styled.div`
  background-image: url(${Callie_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const David = styled.div`
  background-image: url(${David_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Emily = styled.div`
  background-image: url(${Emily_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Johnny = styled.div`
  background-image: url(${Johnny_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Justin = styled.div`
  background-image: url(${Justin_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Kellechi = styled.div`
  background-image: url(${Kellechi_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Chun = styled.div`
  background-image: url(${Chun_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Brittany = styled.div`
  background-image: url(${Brittany_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Danny = styled.div`
  background-image: url(${Dan_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Laci = styled.div`
  background-image: url(${Laci_Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
`;
const Abi = styled.div`
  background-image: url(${Abi_Image});
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
            <Intern>Jizhou Zhang</Intern>
            <Bio>
              Jizhou is from Rochester Hills of Metro Detroit, Michigan. He's a
              computer science major from Oakland University. He works in the
              DPS department.
            </Bio>
          </div>
          <div>
            <Cole />
            <Intern>Cole Gibbs</Intern>
            <Bio>
              Cole is from Houston, Texas. He goes to the University of Houston.
              He is a computer science major and works in the DPS department of
              HQ.
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
              Justin is from San Diego, California. Justin is a finance major
              from the University of San Diego and is part of the finance team
              at HQ.
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
            <Bio>Brittany is from Chicago, Illinois</Bio>
          </div>
          <div>
            <Johnny />
            <Intern>Johnny Lam</Intern>
            <Bio>Johnny is from Stow, Ohio</Bio>
          </div>
          <div>
            <Donovan />
            <Intern>Donovan Campbell</Intern>
            <Bio>Donovan is from Chengdu, Sichuan.</Bio>
          </div>
          <div>
            <Jessica />
            <Intern>Jessica</Intern>
            <Bio>Jessica is from Placerville, California</Bio>
          </div>
          <div>
            <Chun />
            <Intern>Chun</Intern>
            <Bio>Chun is from Colton, California</Bio>
          </div>
        </GridContainer>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
