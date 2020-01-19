import React from "react";
import styled from 'styled-components';
import EnteteDePage from './EnteteDePage'

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`
const Br = styled.div`
  height: 5px;
  background: #eee;
`


class FormCreationUtilisateur extends React.Component {
  render() {
    return (
      <form>
      <EnteteDePage title='Créer Utilisateur' resume="Retrouvez ici une vue d'ensemble des utilisateurs, cours, webinaires et groupes de discussion."/>
        <Br />
          <WrapperFull>
            <div className="form-create-user-left">
              
            <label htmlFor="email">Adresse de messagerie</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="prenom">Prénom</label>
            <input type="text" name="prenom" id="prenom" />
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" id="nom" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password-confirm">Confirmer mot de passe</label>
            <input type="password" name="password-confirm" id="password-confirm" />
            <label htmlFor="role">Rôle</label>
            <select name="role" id="role" disabled>
              <option value>Professeur</option>
            </select>
            <label htmlFor="send-mail">Envoyez une notification à l'utilisateur</label>
            <div className="valid">
              <input type="checkbox" name="send-mail" id="send-mail" /> 
              <p>Envoyer un message au nouvel utilisateur a propos de son compte.</p>
            </div>
          </div>
          <div className="form-create-user-right">
          <button>Créer</button>
        </div>
      </WrapperFull>
        
    </form>
    )
  }

}

export default FormCreationUtilisateur;