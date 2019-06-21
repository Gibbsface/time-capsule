import "../../../../node_modules/video-react/dist/video-react.css";
import React, { Component } from "react";
import styled from "@emotion/styled";
import { Player, ControlBar } from "video-react";
import ScaryMovies from "../../../Videos/IMG_0379.mov";
import SHGroup30 from "../../../Videos/IMG_0142.mov";
import SHGroup31 from "../../../Videos/IMG_0135.mov";
import SHGroup32 from "../../../Videos/IMG_0138.mov";
import SHGroup33 from "../../../Videos/IMG_0141.mov";
import SHGroup34 from "../../../Videos/IMG_0147.mov";
import SHGroup35 from "../../../Videos/IMG_0148.mov";
import SHGroup36 from "../../../Videos/IMG_0150.mov";
import KelechiandDucks from "../../../Videos/IMG_0367.mov";
import PoolJump from "../../../Videos/PoolJump.MOV";

const Video = styled.div`
  background-color: #666062;
  width: 100%;
  height: 500px;
  position: 0 0;
  margin: auto;
  padding-right: 7%;
  padding-left: 7%;
  width: 86%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  > div {
  }
`;

export default class PlayerControlExample extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Video>
          <Player
            ref='player'
            autoPlay
            src={ScaryMovies}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup30}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup31}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup32}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup33}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup34}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup35}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={SHGroup36}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={KelechiandDucks}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>

        <Video>
          <Player
            ref='player'
            autoPlay
            src={PoolJump}
            fluid={false}
            width='100%'
            height='100%'
          >
            <ControlBar autoHide={false} />
          </Player>
        </Video>
      </div>
    );
  }
}
/*
const SummerVideos = [
  {
    src: ScaryMovies,
    thumbnail: ScaryMovies,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "test test test"
  },
  {
    src: ScavengerHunt3,
    thumbnail: ScavengerHunt3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "test test test"
  }
];
*/
