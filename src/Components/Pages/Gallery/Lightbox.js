import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default class LightboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      photoIndex: 0,
      isOpen: false
    };
  }

  onClick() {
    this.setState({ isOpen: true });
  }

  render() {
    const { photoIndex, isOpen, id } = this.state;
    const { s } = this.props.photos;
    return (
      <>
        <button type='button' onClick={() => this.setState({ isOpen: true })}>
          {this.props.title}
        </button>
        {isOpen ? (
          <Lightbox
            imageLoadErrorMessage={""}
            imagePadding={50}
            mainSrc={s.photos[photoIndex].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            nextSrc={s.photos[(photoIndex + 1) % s.photos.length]}
            prevSrc={
              s.photos[(photoIndex + s.photos.length - 1) % s.photos.length]
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + s.photos.length - 1) % s.photos.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % s.photos.length
              })
            }
          />
        ) : null}
      </>
    );
  }
}
