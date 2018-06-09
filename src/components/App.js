import React, {Component} from "react";
import FlatList from "./FlatList";
import flats from "../../data/flats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: null
    }
  }

  onCardClick = (lat, long) =>{
    console.log(lat, long);
  }
  render(){
    return (
      <div>
        <div className="flat-list">
          <FlatList onCardClick={this.onCardClick}flats={flats}/>
        </div>
        <div className="map-container">

        </div>
      </div>

    )
  }
}

export default App;
