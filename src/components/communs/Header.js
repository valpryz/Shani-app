import React from "react";
import InfoUtilisateur from "./InfoUtilisateur";
import Logo from '../communs/assets/images/logo-hannibal-incubator.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="logo Hannibal Incubator" />
        </div>
        <InfoUtilisateur />
    </header>)
  }

}

export default Header;