import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import styled from "@emotion/styled";
import Memories from "../../../Directory/memories.js";
import Lightbox from "./Lightbox.js";
import VideoPlayer from "./Videos";

const VideoContainer = styled.div``;

class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageContainer>
          {Memories.map(s => {
            return s.photos != null ? (
              <Lightbox
                key={"Lightbox" + s.id}
                photos={s.photos}
                label={s.title}
              />
            ) : null;
          })}
        </PageContainer>
        <VideoContainer>
          <VideoPlayer />
        </VideoContainer>
        <Footer />
      </>
    );
  }
}

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

export default GalleryPage;
