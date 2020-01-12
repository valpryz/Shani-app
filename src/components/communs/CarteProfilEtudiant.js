import React from "react";

class CarteProfilEtudiant extends React.Component {
  render() {
    return <div className="student-profile-card">
  <img src="assets/images/Ebenezer_ofori.png" alt />
  <p>Jean Ofori Ekamen</p>
  <p className="email">jean.ofori@gmail.com</p>
  <button>commencer</button>
    </div>;
  }

}

export default CarteProfilEtudiant;