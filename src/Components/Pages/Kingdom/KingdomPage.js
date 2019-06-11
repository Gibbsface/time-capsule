import React, { Component } from "react";
import styled from "@emotion/styled";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const title = [`Title 1`, `Title 2`, `Title 3`];
const story = [
  `Hydrogen stratosphere control tower capacitor Saturn Lalande
  21185. Control tower x-rays Luhman 16 Banard's Star engine lunar.
  Horizon engine capture Pluto Brahe sun continuum ion-drive control
  tower Proxima Centauri space-time booster. Core horizon subspace
  Voyager coordinates water. Contractors Banard's Star nozzle time
  Orion weightless Gemini extra-vehicular explore.`,

  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`,

  `Challenger Voyager Sirius capsule Pioneer Kepler hyperspace
  launch. Singularity extra-vehicular circumnavigate burst. Procyon
  fuel cell asteroid subspace uranium Proxima Centauri prototype
  capsule.`
];

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  margin-left: 7%;
  margine-right: 7%;
  width: 86%;
  border: solid blue;
`;

const Post = styled.div`
  flex-grow: 1;
  border: dashed white;

  :first-child {
    flex-grow: 2;
    border: solid yellow;
  }

  :last-child {
    flex-grow: 2;
    border: solid yellow;
  }

  @media all and (min-width: 600px) {
    flex-basis: 50%;
    padding-right: 10px;
    :first-child {
      flex-basis: 100%;
    }
  }

  @media all and (min-width: 1000px) {
    flex-basis: 33%;
    :first-child {
      flex-basis: 66%;
    }
  }

  @media all and (min-width: 1200px) {
    flex-basis: 25%;
    :first-child {
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
`;

class KingdomPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PostContainer className='c-posts'>
          <Post className='c-posts__item'>
            <h2>{title[0]}</h2>
            <p>{story[0]}</p>
          </Post>
          <Post className='c-posts__item'>
            <h2>{title[1]}</h2>
            <p>{story[1]}</p>
          </Post>
          <Post className='c-posts__item'>
            <h2>{title[2]}</h2>
            <p>{story[2]}</p>
          </Post>
          <Post className='c-posts__item'>
            <h2>Article Title Here</h2>
            <p>
              Capsule crew Discovery ice spacecraft Pioneer gravity Picard.
              Lithium contractors meteor water core saucer white hole stars
              planet Picard Jupiter Skunkworks. Prototype clusters Voyager
              cosmos zero-g Pluto Skunkworks hatch. Circumnavigate core
              hyperspace motion comet Ptolemy.
            </p>
          </Post>
          <Post className='c-posts__item'>
            <h2>Article Title Here</h2>
            <p>
              Orbit warp atomic Buzz Lightyear. Uranium circumnavigate Halley
              Neptune nebula launch north Proxima Centauri engine.
            </p>
          </Post>
          <Post className='c-posts__item'>
            <h2>Article Title Here</h2>
            <p>
              Troposphere capacitor Newton Kepler. Jupiter ionosphere saucer
              Gemini Neptune core Alpha Centauri Venus comet Proxima Centauri
              Herschel. Banard's Star inertia laser contractors ion-drive fuel
              cell NASA. Panel solar-flare dwarf probe Sagan Sirius jetpack time
              laser. Columbia nebula horizon mesoshphere pulsar mission nuclear
              Sirius jetpack UFO.
            </p>
          </Post>
          <Post className='c-posts__item'>
            <h2>Article Title Here</h2>
            <p>
              X-rays Orion capsule re-entry Mercury tank capture Mars control
              tower. Fusion Challenger physics flight Saturn . Warp countdown
              flare telemetry yaw rocket stars. Planet astronomy Venus reusable
              continuum inertia robotic re-entry booster Pioneer.
            </p>
          </Post>
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
