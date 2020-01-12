import React from "react";

class BlocForgetPass extends React.Component {
  render() {
    return <div className="bloc-forget-password">
  <h1>Mot de passe oublie ?</h1>
  <p>Pour recuperer/modifier votre mot de passe, saisissez votre adresse email et cliquez sur le lien dans le message.</p>
  <input type="text" />
  <button>envoyer</button>
    </div>
  }

}

export default BlocForgetPass;