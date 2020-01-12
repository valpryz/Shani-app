import React from "react";

class NavigationTab extends React.Component {
  render() {
    return <div className="navigation-tab">
  <input defaultChecked="checked" type="radio" name="tab" id="tab1" />
  <input type="radio" name="tab" id="tab2" />
  <nav>
    <ul>
      <li className="tab1">
        <label htmlFor="tab1">apercu</label>
      </li>
      <li className="tab2">
        <label htmlFor="tab2">utilisateurs</label>
      </li>
    </ul>
  </nav>
  <section>
    <div className="tab1">
      <div className="carte-cours">
        <img src="assets/images/africanwomenwalking.jpg" alt />
        <h5>Bataillon des entrepreneurs panafricains</h5>
      </div>
    </div>
    <div className="tab2">
      <div className="quiz-item">
        <p>Lecon 1 Le panafricanisme economique</p>
        <img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt />
      </div>
    </div>
  </section>
    </div>;
  }

}

export default NavigationTab;