import React from "react";
import africanwomenwalking from './assets/images/africanwomenwalking.jpg'

class ModuleLeconCreation extends React.Component {
  render() {
    return (
      <div className="lecon-creation">
        <div className="top">
          <input type="text" name="titre" id="titre" placeholder="le panafricanisme economique" />
          <div className="attribution">
            <label htmlFor="attribution">Attribué à</label>
            <select name="attribution" id="attribution">
              <option value>Fabrice Fernand Fangwa</option>
            </select> 
          </div>
        </div>
        <img src={africanwomenwalking} alt='puise eau' />
        <div className="add-image-module">
          <p>this is the first image attendees will see at the top of your listing. Use a high quality image: 1280x720px (16:9 ratio).</p>
          <button>Ajouter Image</button>
        </div>
      </div>
    )
  }

}

export default ModuleLeconCreation;