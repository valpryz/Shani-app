import React from "react";
import profile from './assets/images/Rectangle 2.7.jpg'

class FormateurInfos extends React.Component {
  render() {
    return (
        <div className="student-formateur-infos">
            <h1>formateur</h1>
            <div className="bloc-infos">
                <img src={profile} alt='le prof' />
                <div className="text">
                <h4>henri lotin</h4>
                <p>Designer graphique & UX/UI base a Douala, Cameroun. Je suis le directeur creatif et le cofondateur de Lotin Corp. a douala, au Cameroun. Et depuis Octobre 2014, je suis le fondateur de la Lotin Corp. Academy.</p>
                </div>
            </div>
        </div>
    )
  }

}

export default FormateurInfos;