import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Gallery from "react-grid-gallery";
import Memories from "../../../Directory/memories.js";
import _ from "lodash";

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

//TODO: use lodash to map through all memories to display pictures,
// then use ternary operators to look at the tags, find if it matches, then choose to display it

class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageContainer>
          {_.map(Memories, Story => {
            return Story.photos != null ? (
              <section-container key={"gallery_" + Story.id}>
                <Titles key={"title_" + Story.id}>
                  {"\n"} {Story.title} {"\n"}
                </Titles>
                <Gallery
                  key={"images_" + Story.id}
                  images={Story.photos}
                  enableImageSelection={false}
                  maxRows={1}
                />
              </section-container>
            ) : null;
          })}
        </PageContainer>
        <Footer />
      </>
    );
  }
}

export default GalleryPage;
