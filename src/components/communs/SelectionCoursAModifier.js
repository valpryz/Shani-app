import React from "react";

class SelectionCoursAModifier extends React.Component {
  render() {
    return <div className="bloc-selection-cours">
  <select name id="cours-selection">
    <option value>Bataillon des entrepreneurs panafricains</option>
  </select>
  <select name id="module-selection">
    <option value>Module 2</option>
  </select>
  <select name id="lecon-selection">
    <option value>Lecon 1</option>
  </select>
    </div>;
  }

}

export default SelectionCoursAModifier;