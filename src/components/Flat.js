import React, {Component} from "react";
import PropTypes from "prop-types";

class Flat extends Component {
  handleClick = () => {
    this.props.handleCardClick(this.props.data.lat, this.props.data.lng);
  }
  render(){
    const {name, price, priceCurrency, imageUrl} = this.props.data;
    const bcgImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`;
    return (
      <div className="card"
            style={{backgroundImage: bcgImage}}
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

Flat.propTypes = {
  data: PropTypes.object
}
export default Flat;
