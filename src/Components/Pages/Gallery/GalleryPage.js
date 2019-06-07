import React, { Component } from "react";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Gallery from "react-grid-gallery";
import IMAGES from "./Images";

class GalleryPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Gallery images={IMAGES} />
        <Footer />
      </>
    );
  }
}

export default GalleryPage;
