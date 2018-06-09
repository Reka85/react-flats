import React, {Component} from "react";
import FlatList from "./FlatList";
import Map from "./Map";
import flats from "../../data/flats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: {
        lat: null,
        lng: null
      }
    }
  }

  onCardClick = (lat, lng) =>{
    this.setState({
      selectedFlat: {lat:lat, lng:lng}
      })
  }
  render(){
    return (
      <div>
        <div className="flat-list">
          <FlatList onCardClick={this.onCardClick}flats={flats}/>
        </div>
        <div className="map-container">
           <Map lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
        </div>
      </div>

    )
  }
}

export default App;
