import React from "react";
import profilePic from "../communs/assets/images/Ebenezer_ofori.png";

class InfoUtilisateur extends React.Component {
  render() {
    return (
      <div className="userInfos">
        <ul>
          <li className="photoDeProfil"><img src={profilePic} alt="profil" /></li>
          <li className="nom">Jean Ofori Ekamen</li>
        </ul>
        <div className="dropdown-content">
          <p>Mon Profil</p>
          <p>Se deconnecter</p>
        </div>
      </div>
    )
  }

}

export default InfoUtilisateur;