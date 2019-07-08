import React from "react";
import styled from "@emotion/styled";
import Photobox from "./Photobox";

const MemoryCard = ({ cardData, isLightBoxOpen, changeLightBoxOpen }) => {
  return (
    <CardContainer>
      <Title>{cardData.title}</Title>
      <Story>{cardData.story}</Story>
      <Photobox
        isLightBoxOpen={isLightBoxOpen}
        changeLightBoxOpen={changeLightBoxOpen}
        key={"Photobox" + cardData.id}
        photos={cardData.photos}
      />
    </CardContainer>
  );
};

export default MemoryCard;

const CardContainer = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-left-width: 7px;
  border-radius: 3px;
  border-left-color: #3eb1c8;
  height: auto;
  width: 375px;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

const Title = styled.p`
  font-size: 24px;
  margin: 5px 0px;
  color: #333333;
`;

const Story = styled.p`
  margin-top: 0px;
`;
