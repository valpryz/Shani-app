
import React from "react";
import SelectionCoursAModifier from "./SelectionCoursAModifier";
import BoutonsSpeciaux from "./BoutonsSpeciaux";

class FormEditionCoursTeacher extends React.Component {
  render() {
    return <form>
  <div className="form-teacher-left">
    <SelectionCoursAModifier></SelectionCoursAModifier>
    <h4>initiation a l'entreprenariat</h4>
    <h4>resume de la lecon</h4>
    <textarea name="resume-teacher" id="resume-teacher" defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
    <div className="composants" />
    <BoutonsSpeciaux></BoutonsSpeciaux>
    <h4>ressources de la lecon</h4>
  </div>
  <div className="form-teacher-right">
    <button>enregistrer</button>
  </div>
    </form>;
  }

}

export default FormEditionCoursTeacher;