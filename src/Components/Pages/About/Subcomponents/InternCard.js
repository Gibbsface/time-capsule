import React from "react";
import styled from "@emotion/styled";

const InternCard = ({ cardData }) => {
  return (
    <CardContainer>
      <Name>{cardData.name}</Name>
      <TextWrap src={cardData.photo} width='150' height='200' />
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

const TextWrap = styled.img`
  float: left;
  margin-top: 5px;
  margin-right: 7px;
`;

const Bio = styled.p`
  margin-top: 0px;
`;
