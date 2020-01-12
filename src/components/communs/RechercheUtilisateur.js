
import React from "react";

class RechercheUtilisateur extends React.Component {
  render() {
    return <div className="searchbox">
  <div className="title">
    <h1>formateurs</h1>
    <a href="#"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></a>
  </div>
  <input type="text" name="searchbox" id="searchbox" />
    </div>;
  }

}

export default RechercheUtilisateur;