
import React from "react";
import Logo from './assets/images/logo-hannibal-incubator.png'

class BlocDemarrage extends React.Component {
  render() {
    return (
      <div className="bloc-demarrage">
        <img src={Logo} alt="logo-hannibal-incubator" />
        <h1>Vous n'avez pas encore de compte sur Hannibal Incubator ?</h1>
        <p>Plus de 820 futurs entrepreneurs sont deja sur la plateforme, pour beneficier de tous nos avantages.</p>
        <button>demarrer</button>
      </div>
    )
  }

}

export default BlocDemarrage;