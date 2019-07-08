import React, { useState } from "react";
import styled from "@emotion/styled";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup, Marker } from "react-map-gl";

import MemoryCard from "./MemoryCard";

const MemoryPopup = props => {
  const [isShowing, changeIsShowing] = useState(false);
  const [isLightBoxOpen, changeLightBoxOpen] = useState(false);
  const StyledPopup = styled(Popup)`
    z-index: ${isShowing && !isLightBoxOpen ? "10000" : "0"};
  `;

  return (
    <>
      <div onClick={() => changeIsShowing(!isShowing)}>
        <Marker
          key={props.data.id}
          latitude={props.data.latitude}
          longitude={props.data.longitude}
          captureClick={true}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Marker>
      </div>
      {isShowing && (
        <StyledPopup
          latitude={props.data.latitude}
          longitude={props.data.longitude}
          closeButton={true}
          closeOnClick={false}
          z-index={isShowing ? "10000" : "0"}
          onClose={() => {
            changeIsShowing(false);
          }}
        >
          <MemoryCard
            isLightBoxOpen={isLightBoxOpen}
            changeLightBoxOpen={changeLightBoxOpen}
            cardData={props.data}
            key={props.data.id}
          />
        </StyledPopup>
      )}
    </>
  );
};

export default MemoryPopup;
