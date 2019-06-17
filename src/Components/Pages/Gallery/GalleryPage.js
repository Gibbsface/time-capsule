import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Gallery from "react-grid-gallery";
import Week1OutreachBeach from "./Outreachpics";
import FunWeek from "./Funpics";
import CampusPics from "./Campus";

const Titles = styled.div`
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 10px;
  text-decoration: none;
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

class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageContainer>
          <section-container>
            <Titles>
              {"\n"} Beach Outreach & Training {"\n"}
            </Titles>
            <Gallery images={Week1OutreachBeach} />
            <Titles>
              {"\n"} {"\n"}
            </Titles>
          </section-container>
          <section-container>
            <Titles>
              {"\n"} Campus Outreach {"\n"}
            </Titles>
            <Gallery images={CampusPics} />
            <Titles>
              {"\n"} {"\n"}
            </Titles>
          </section-container>
          <section-container>
            <Titles>
              {"\n"}FUN{"\n"}
            </Titles>
            <Gallery images={FunWeek} />
          </section-container>
        </PageContainer>

        <Footer />
      </>
    );
  }
}

export default GalleryPage;
