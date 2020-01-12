
import React from "react";

class FormCreationCours extends React.Component {
  render() {
    return <form>
  <div className="form-course-left">
    <div className="info-gnr">
      <h2>informations generales</h2>
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
          <option value>Fabrice Fernand Fangwa</option>
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
        <img src="assets/images/africanwomenwalking.jpg" alt />
      </div>
    </div>
    <div className="description">
      <h2>description</h2>
      <p>Add more details to your event like schedule, sponsors, or featured guests.</p>
      <textarea name="description" id="description" cols={30} rows={10} defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
      <div className="inner-description">
        <div className="bloc-detail">
          <h2>Details de la formation</h2>
          <textarea name="details-formation" id="details-formation" cols={30} rows={10} defaultValue={"                                4 modules\n            \n                                15 lecons\n            \n                                7 videos\n            \n                                4 quizzes\n            \n                                3hr14 minutes completion time\n                            "} />
        </div>
        <div className="bloc-avantage">
          <h2>avantages de la formation</h2>
          <textarea name="avantages-formation" id="avantages-formation" cols={30} rows={10} defaultValue={"                                Learn about inbound marketing techniques\n            \n                                Develop understanding of core tactics of inbound marketing\n            \n                                Advance your skills as an inbound marketer\n                            "} />
        </div>    
      </div>
    </div>
  </div>
  <div className="form-course-right">
    <button>enregistrer</button>
  </div>
    </form>;
  }

}

export default FormCreationCours;