import React, {Component} from "react";
import Flat from "./Flat";

class FlatList extends Component {
  handleCardClick = (latitude, longitude) =>{
    this.props.onCardClick(latitude, longitude);
  }
  render(){
    const flats = this.props.flats.map((flat) => {
      return <Flat data={flat} key={flat.name} handleCardClick={this.handleCardClick}/>
    })
    return(
      <div className="flat-list">
        {flats}
      </div>
    )
  }
}

export default FlatList;
