import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Gallery from "react-grid-gallery";
import Memories from "../../../Directory/memories.js";
import _ from "lodash";

const PageContainer = styled.div`
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
  padding-top: 15px;
`;

const AlbumContainer = styled.img`
  background-color: red;
  width: 100%;
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
              <AlbumContainer
                src={Story.photos[0].src}
                alt='test test'
                key={"album" + Story.id}
              />
            ) : null;
          })}
        </PageContainer>
        <Footer />
      </>
    );
  }
}

export default GalleryPage;

// {_.map(Memories, Story => {
//   return Story.photos != null ? (
//     <section-container key={"gallery_" + Story.id}>
//       <Titles key={"title_" + Story.id}>
//         {"\n"} {Story.title} {"\n"}
//       </Titles>
//       <Gallery
//         key={"images_" + Story.id}
//         images={Story.photos}
//         enableImageSelection={false}
//         maxRows={1}
//         backdropClosesModal={true}
//       />
//     </section-container>
//   ) : null;
// })}
