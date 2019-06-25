import React from "react";
import styled from "@emotion/styled";

const PicWrap = styled.img`
  margin-top: 10%;
  margin-right: 20%;
  width: 400px;
  height: 250px;
`;

const Layout = ({ picture }) => {
  // console.log(picture);
  return <PicWrap src={picture.photos.src} />;
};
export default Layout;
