import React from "react";
import professeur from '../communs/assets/layers/professor-consultation.png'

class Carte extends React.Component {
  render() {
    return <div className="carte">
  <img src={professeur} alt="formateur" />
  <h6 className="number">0</h6>
  <h6>Formateurs</h6>
    </div>;
  }

}

export default Carte;