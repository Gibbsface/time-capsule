import React, { Component } from "react";
import styled from "@emotion/styled";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Memories from "../../../Directory/memories.js";
import _ from "lodash";

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  margin-left: 7%;
  margine-right: 7%;
  width: 86%;
  background: #666062;
`;

const Post = styled.div`
  background-color: white;
  padding-left: 5px;
  flex-grow: 1;
  border-left: solid #3eb1c8 3px;
  margin: 5px;

  :hover {
    border-left: solid #3eb1c8 8px;
    margin-left: 0;
  }

  :first-of-type {
    flex-grow: 2;
  }

  :last-of-type {
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

class KingdomPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PostContainer className='c-posts'>
          {_.map(Memories, Story => {
            return (
              <Post key={Story.id}>
                <h2>{Story.title}</h2>
                <p>{Story.story}</p>
              </Post>
            );
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

export default KingdomPage;
