import React, { Component } from "react";
import styled from "@emotion/styled";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Memories from "../../../Directory/memories.js";
import LandingImage from "../../../Images/Outreach/CocoaBeach/Beach10.jpg";
import _ from "lodash";

export default class KingdomPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <AlbumContainer>
          <ImageInput src={LandingImage} />
          <Overlay>
            <OverText>Here's How God Showed Up</OverText>
          </Overlay>
        </AlbumContainer>
        <PostContainer className='c-posts'>
          {_.map(Memories, Story => {
            return Story.tags.includes("Outreach") ? (
              <Post key={Story.id}>
                <h2>{Story.title}</h2>
                <p>{Story.story}</p>
              </Post>
            ) : null;
          })}
        </PostContainer>
        <Prayer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Prayer>
        <Footer />
      </>
    );
  }
}

const AlbumContainer = styled.div`
  position: relative;
  width: 86%;
  height: 250px;
  margin: 5px 7%;
`;

const ImageInput = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  background-color: #3eb1c8a9;
`;

const OverText = styled.div`
  color: white;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  margin-left: 7%;
  margin-right: 7%;
  width: 86%;
  background: #666062;
`;

const Post = styled.div`
  background-color: white;
  padding-left: 5px;
  border-left: solid #3eb1c8 3px;
  margin: 5px;
  transition: 0.25s ease;
  :hover {
    border-left: solid #3eb1c8 8px;
    margin-left: 0;
  }

  flex-grow: 1;

  :first-of-type {
    flex-grow: 2;
  }

  @media all and (min-width: 600px) {
    flex-basis: 50%;
    padding-right: 10px;
    :first-of-type {
      flex-basis: 100%;
    }
  }

  @media all and (min-width: 1000px) {
    flex-basis: 33%;
    :first-of-type {
      flex-basis: 66%;
    }
  }

  @media all and (min-width: 1200px) {
    flex-basis: 25%;
    :first-of-type {
      flex-basis: 50%;
    }
  }
`;

const Prayer = styled.div`
  width: 72%;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 4em;
  padding-bottom: 4em;
  margin-left: 7%;
  margin-right: 7%;

  text-align: center;
  font-style: italic;

  background-color: #666062;
  color: white;
`;
