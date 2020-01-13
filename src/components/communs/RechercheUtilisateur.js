
import React from "react";
import circle from '../communs/assets/icon/navigation/expand_more_24px_outlined.svg'

class RechercheUtilisateur extends React.Component {
  render() {
    return (
      <div className="searchbox">
  <div className="title">
    <h1>utilisateurs</h1>
    <img src={circle} alt='modal creation user' />
  </div>
  <input type="text" name="searchbox" id="searchbox" />
    </div>
    )
  }

}

export default RechercheUtilisateur;