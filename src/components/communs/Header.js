import React from "react";
import InfoUtilisateur from "./InfoUtilisateur";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="assets/images/logo-hannibal-incubator.png" alt="logo-hannibal-incubator" />
        </div>
        <InfoUtilisateur></InfoUtilisateur>
    </header>)
  }

}

export default Header;