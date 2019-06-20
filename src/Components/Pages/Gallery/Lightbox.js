import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import styled from "@emotion/styled";
import "react-image-lightbox/style.css";

const AlbumContainer = styled.div`
  position: relative;
  width: 450px;
  height: 300px;
  margin: 10px 10px;

  border: solid #f9b625 5px;

  overflow: hidden;
`;

const ImageInput = styled.input`
  display: block;
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.33s ease;
  background-color: #666062;
  :hover {
    opacity: 1;
  }
`;

const OverText = styled.div`
  color: white;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default class LightboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  onClick() {
    this.setState({ isOpen: true });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <AlbumContainer>
          <ImageInput
            type='image'
            src={this.props.photos[0].src}
            onClick={() => this.setState({ isOpen: true })}
          />
          <Overlay>
            <OverText>{this.props.label}</OverText>
          </Overlay>
        </AlbumContainer>

        <div>
          {isOpen ? (
            <Lightbox
              imageLoadErrorMessage={""}
              imagePadding={50}
              mainSrc={this.props.photos[photoIndex].src}
              onCloseRequest={() =>
                this.setState({ isOpen: false, photoIndex: 0 })
              }
              nextSrc={
                this.props.photos[(photoIndex + 1) % this.props.photos.length]
                  .src
              }
              prevSrc={
                this.props.photos[
                  (photoIndex + this.props.photos.length - 1) %
                    this.props.photos.length
                ].src
              }
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + this.props.photos.length - 1) %
                    this.props.photos.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.photos.length
                })
              }
            />
          ) : null}
        </div>
      </>
    );
  }
}
