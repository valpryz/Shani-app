import React from "react";

class BlocLogin extends React.Component {
  render() {
    return (
      <div className="bloc-login">
        <h1>Connectez-vous a My Hannibal Incubator</h1>
        <form action>
          <input type="text" name="identifiant" id="identifiant" />
          <input type="password" name="mot-de-passe" id="mot-de-passe" />
          <div className="check">
            <input type="checkbox" name="cochez" id="cochez" />
            <label htmlFor="cochez">Se souvenir de moi</label>
          </div>
          <button>se connecter</button>
        </form>
        <a href>Mot de passe oublie ?</a>
      </div>
    )
  }

}

export default BlocLogin;