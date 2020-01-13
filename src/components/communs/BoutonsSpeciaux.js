import React from "react";
import navigation from './assets/icon/navigation/expand_more_24px_outlined.svg'

class BoutonsSpeciaux extends React.Component {
  render() {
    return (
      <div className="boutons-speciaux">
  <button><i><img src={navigation} alt='navigation' /></i>Ajouter texte</button>
  <button><i><img src={navigation} alt='navigation' /></i>Ajouter media</button>
  <button><i><img src={navigation} alt='navigation' /></i>Ajouter quiz</button>
    </div>
    )
  }

}

export default BoutonsSpeciaux;