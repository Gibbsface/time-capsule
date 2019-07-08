import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import styled from "@emotion/styled";
import "react-image-lightbox/style.css";

export default class Photobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { isLightBoxOpen, changeLightBoxOpen } = this.props;

    return (
      <div>
        <ButtonContainer>
          <ShowButton
            onClick={() => {
              this.setState({ isOpen: true });
              changeLightBoxOpen(true);
            }}
          >
            Show Photos
          </ShowButton>
        </ButtonContainer>
        {isLightBoxOpen && this.props.photos.length != null && (
          <Lightbox
            imageLoadErrorMessage={""}
            imagePadding={50}
            mainSrc={this.props.photos[photoIndex].src}
            onCloseRequest={() => {
              changeLightBoxOpen(false);
              this.setState({ isOpen: false, photoIndex: 0 });
            }}
            nextSrc={
              this.props.photos[(photoIndex + 1) % this.props.photos.length].src
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
        )}
      </div>
    );
  }
}

const ShowButton = styled.div`
  background: #dd7d1b;
  padding: 6px 12px;
  color: #fff;
  margin-top: 0.5em;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  width: 150px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
