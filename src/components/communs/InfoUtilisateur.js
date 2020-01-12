import React from "react";

class InfoUtilisateur extends React.Component {
  render() {
    return <div className="userInfos">
  <ul>
    <li><img src="assets/icon/notification/life-buoy.png" alt /></li>
    <li>Aide</li>
    <li className="photoDeProfil"><img src="assets/images/Ebenezer_ofori.png" alt /></li>
    <li className="nom">Jean Ofori Ekamen</li>
    <li className="toggle"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></li>
  </ul>
    </div>;
  }

}

export default InfoUtilisateur;