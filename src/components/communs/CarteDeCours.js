import React from "react";
import cartedecours from "../communs/assets/images/africanwomenwalking.jpg";

class CarteDeCours extends React.Component {
  render() {
    return <div className="carte-cours">
  <img src={cartedecours} alt="carte de cours" />
  <h5>Bataillon des entrepreneurs panafricains</h5>
    </div>;
  }

}

export default CarteDeCours;