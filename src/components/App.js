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
        long: null
      }
    }
  }

  onCardClick = (lat, long) =>{
    this.setState({
      selectedFlat: {lat:lat, long:long}
      })
  }
  render(){
    return (
      <div>
        <div className="flat-list">
          <FlatList onCardClick={this.onCardClick}flats={flats}/>
        </div>
        <div className="map-container">
           <Map lat={this.state.selectedFlat.lat} long={this.state.selectedFlat.long}/>
        </div>
      </div>

    )
  }
}

export default App;
