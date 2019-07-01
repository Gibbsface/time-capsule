import React, { Component } from "react";
import styled from "@emotion/styled";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup, Marker } from "react-map-gl";

import MemoryCard from "./MemoryCard";

export default class MemoryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: false };

    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ isShowing: true });
  }

  render() {
    return (
      <div onClick={this.show}>
        <Marker
          key={this.props.data.id}
          latitude={this.props.data.latitude}
          longitude={this.props.data.longitude}
          captureClick={true}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Marker>
        {this.state.isShowing && (
          <Popup
            latitude={this.props.data.latitude}
            longitude={this.props.data.longitude}
            closeButton={false}
            closeOnClick={true}
            onClose={() => {
              this.setState({ isShowing: false });
            }}
          >
            <MemoryCard cardData={this.props.data} key={this.props.data.id} />
          </Popup>
        )}
      </div>
    );
  }
}

const Container = styled.div`
  onclick: ;
`;
