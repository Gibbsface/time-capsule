import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import TOKEN from "../../../config/tokens.json";
import "mapbox-gl/dist/mapbox-gl.css";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

class MapPage extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 28.3921,
      longitude: -81.2825,
      zoom: 8
    }
  };

  componentDidMount() {
    console.log(TOKEN.MAPBOX_ACCESS_TOKEN);
  }

  render() {
    return (
      <>
        <Navbar />
        <p> This is a map </p>
        <ReactMapGL
          mapboxApiAccessToken={TOKEN.MAPBOX_ACCESS_TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
        <Footer />
      </>
    );
  }
}

export default MapPage;
