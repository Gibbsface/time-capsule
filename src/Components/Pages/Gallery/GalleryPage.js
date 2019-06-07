import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Gallery from "react-grid-gallery";
import Week1OutreachBeach from "./Images";

const Titles = styled.div`
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 10px;
  text-decoration: none;
`;
class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section-container>
          <Titles>
            {"\n"} Beach OutReach & Training {"\n"}
          </Titles>
          <Gallery images={Week1OutreachBeach} />
          <Titles>
            {"\n"} {"\n"}
          </Titles>
        </section-container>
        <section-container>
          <Titles>
            {"\n"}FUN{"\n"}
          </Titles>
          <Gallery images={Week1OutreachBeach} />
        </section-container>

        <Footer />
      </>
    );
  }
}

export default GalleryPage;
