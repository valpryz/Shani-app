
import React from "react";
import ModuleLeconCreation from "./ModuleLeconCreation";

class FormCreationModule extends React.Component {
  render() {
    return <form>
  <div className="form-module-left">
    <select name="course" id="course">
      <option value="course-1">Bataillon des entrepreneurs panafricains</option>
    </select>
    <div className="module-creation">
      <input type="text" name="titre" id="titre" placeholder="Initiation a l'entreprenariat" />
      <h4>resume du module</h4>
      <textarea name="resume" id="resume" cols={30} rows={10} defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
      <h4>lecons</h4>
      <button>+</button>
      <ModuleLeconCreation></ModuleLeconCreation>
      <button>+</button>
    </div>
  </div>
  <div className="form-module-right">
    <button>enregistrer</button>
  </div>
    </form>;
  }

}

export default FormCreationModule;