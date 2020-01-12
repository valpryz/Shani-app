import React from "react";

class FormCreationUtilisateur extends React.Component {
  render() {
    return <form>
  <div className="form-create-user-left">
    <h2>Informations generales</h2>
    <label htmlFor="email">Adresse de messagerie</label>
    <input type="text" name="email" id="email" />
    <label htmlFor="prenom">Prenom</label>
    <input type="text" name="prenom" id="prenom" />
    <label htmlFor="nom">Nom</label>
    <input type="text" name="nom" id="nom" />
    <label htmlFor="password">Mot de passe</label>
    <input type="password" name="password" id="password" />
    <label htmlFor="password-confirm">Confirmer mot de passe</label>
    <input type="password" name="password-confirm" id="password-confirm" />
    <label htmlFor="role">Role</label>
    <select name="role" id="role">
      <option value>Administrateur</option>
      <option value>Professeur</option>
    </select>
    <label htmlFor="send-mail">Envoyez une notification a l'utilisateur</label>
    <div className="valid">
      <input type="checkbox" name="send-mail" id="send-mail" /> 
      <p>Envoyer un message au nouvel utilisateur a propos de son compte.</p>
    </div>
  </div>
  <div className="form-create-user-right">
    <button>Creer</button>
  </div>
    </form>;
  }

}

export default FormCreationUtilisateur;