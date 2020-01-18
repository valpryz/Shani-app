import React from "react";

class Carte extends React.Component {
  render() {
    return <div className="carte">
  <img src={this.props.image} alt="details" />
  <h6 className="number">{this.props.valeur}</h6>
  <h6>{this.props.titre}</h6>
    </div>;
  }

}

export default Carte;