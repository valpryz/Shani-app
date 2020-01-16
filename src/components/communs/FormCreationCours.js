import React from "react";
import styled from 'styled-components';
import imageFemme from './assets/images/africanwomenwalking.jpg'

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`
  margin: 0 auto;
`

class FormCreationCours extends React.Component {
  render() {
    return (
      <form>
        <WrapperFull>
          <WrapperLeft>
            <div className="info-gnr">
              <h2>informations gÉnÉrales</h2>
              <input type="text" name id="titre" placeholder="Bataillon des entrepreneurs panafricains" />
              <input type="text" name="categorie" id="categorie" placeholder="Categorie" />
              <select name="cout" id="cout"> 
                <option value="cout">Cout</option>
              </select>
              <div className="etiquette">
                <label htmlFor="etiquette">Etiquettes</label>
                <input type="text" name="etiquette" id="etiquette" placeholder="Ajouter des etiquettes a votre cours" />
              </div>
              <div className="auteur">
                <label htmlFor="auteur">Auteur</label>
                <select name="auteur" id="auteur">
                  <option value='nothing'>Fabrice Fernand Fangwa</option>
                </select>
              </div>
              <div className="prix">
                <label htmlFor="prix">Prix</label>
                <input type="text" name="prix" id="prix" placeholder="Laisser vide si gratuit" />
              </div>
            </div>
            <div className="img-cover">
              <h2>Image de couverture</h2>
              <div className="content">
                <div>
                  <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 1280x720px (16:9 ratio).</p>
                  <button>Ajouter Image</button>
                </div>
                <img src={imageFemme} alt='femme' />
              </div>
            </div>
            <div className="description">
            <h2>description</h2>
            
            <textarea name="description" id="description" cols={30} rows={10}  />
            <div className="inner-description">
              <div className="bloc-detail">
                <h2>DÉtails de la formation</h2>
                <textarea name="details-formation" id="details-formation" cols={30} rows={10} />
              </div>
              <div className="bloc-avantage">
                <h2>avantages de la formation</h2>
                <textarea name="avantages-formation" id="avantages-formation" cols={30} rows={10}  />
              </div>    
            </div>
          </div>
          </WrapperLeft>
          <WrapperRight>
            <button>enregistrer</button>
          </WrapperRight>       
        </WrapperFull>
      </form>
    )
  }

}

export default FormCreationCours;