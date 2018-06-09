import React, {Component} from "react";

class Flat extends Component {
  handleClick = () => {
    this.props.handleCardClick(this.props.data.lat, this.props.data.lng);
  }
  render(){
  const {name, price, priceCurrency, imageUrl} = this.props.data;
    return (
      <div className="card"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`}}
            onClick={this.handleClick}>
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}
export default Flat;
