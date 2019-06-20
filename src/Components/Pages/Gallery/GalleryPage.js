import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Memories from "../../../Directory/memories.js";
import Lightbox from "./Lightbox.js";
import _ from "lodash";

const PageContainer = styled.div`
  margin-right: 7%;
  margin-left: 7%;
  width: 86%;
  padding-top: 50px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageContainer>
          {_.map(Memories, s => {
            return s.photos != null ? (
              <Lightbox
                key={"Lightbox" + s.id}
                photos={s.photos}
                label={s.title}
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
