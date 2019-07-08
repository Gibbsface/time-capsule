import React from "react";
import styled from "@emotion/styled";

const InternCard = ({ cardData }) => {
  return (
    <CardContainer>
      <Name>{cardData.name}</Name>
      <Bio>{cardData.bio}</Bio>
    </CardContainer>
  );
};

export default InternCard;

const CardContainer = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-left-width: 7px;
  border-radius: 3px;
  border-left-color: #3eb1c8;
  width: auto;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  background-color: #ffffff;
`;
const Name = styled.p`
  font-size: 24px;
  margin: 5px 0px;
  color: #333333;
`;

const Bio = styled.p`
  margin-top: 0px;
`;
