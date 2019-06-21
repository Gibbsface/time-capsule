import React from "react";
import styled from "@emotion/styled";

const Layout = ({ picture }) => {
  const PicWrap = styled.img`
  float: left;
  margin-top: 5px;
  margin-right: 7px;
  width: ${picture.photos.Width}%
  height: ${picture.photos.Height}%
`;
  console.log(picture);
  return <PicWrap src={picture.photos.src} />;
};
export default Layout;
