
import React from "react";

class BlocSignUp extends React.Component {
  render() {
    return <div className="bloc-signup">
  <img src="assets/images/logo-hannibal-incubator.png" alt="logo-hannibal-incubator" />
  <h1>Creer un compte</h1>
  <form action>
    <input type="text" name="prenom" id="prenom" />
    <input type="text" name="nom" id="nom" />
    <input type="password" name="pass" id="pass" />
    <input type="text" name="courriel" id="courriel" />
    <input type="text" name id="mobile" />
    <input type="text" name id="pays" />
    <button>envoyer</button>
  </form>
  <p>Deja inscrit ? <a href="#">Connectez-vous</a></p>
    </div>;
  }

}

export default BlocSignUp;