import React, { Component } from 'react';
import Marker from "./Marker";
import GoogleMap from 'google-map-react';
import PropTypes from "prop-types";

class Map extends Component{
  static defaultProps = {
    center: [48.858043, 2.337157],
    zoom: 12
  };

  render() {
    return (
       <GoogleMap
          //apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          center={this.props.center}
          zoom={this.props.zoom}>
          <Marker lat={this.props.lat} lng={this.props.lng} />
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Map;
