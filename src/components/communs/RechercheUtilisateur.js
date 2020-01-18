
import React from "react";
import modal from '../communs/assets/icon/content/add_circle_outline_24px_outlined.svg'

class RechercheUtilisateur extends React.Component {
  render() {
    return (
      <div className="searchbox">
  <div className="title">
    <h1>utilisateurs</h1>
    <button className='button-modal'><img src={modal} alt='modal creation user' /></button>
  </div>
  <input type="text" name="searchbox" id="searchbox" />
    </div>
    )
  }

}

export default RechercheUtilisateur;