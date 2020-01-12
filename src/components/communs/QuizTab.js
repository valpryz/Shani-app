import React from "react";
import TabQuestionDeQuiz from "./TabQuestionDeQuiz";

class QuizTab extends React.Component {
  render() {
    return <div className="tab-quiz">
  <input type="text" name="titre" id="titre" placeholder="titre du module" />
  <a href="#"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></a>
  <p><em>Si vous creez un quiz pour la lecon, alors vous n'avez pas besoin de donner un titre au module, celui du quiz suffira.</em></p>
  <h2>questions</h2>
  <div className="type-question">
    <select name="type-question" id="type-question">
      <option value>Type de question</option>
      <option value>Choix unique</option>
      <option value>choix multiples</option>
    </select>
    <p>Chronometre</p>
    <input type="number" name="temps" id="temps" />
    <label htmlFor="temps">Min</label>
  </div>
  <div className="add-question">
    <button>+</button>
    <h2>ajouter une question</h2>
  </div>
  <div className="tab-question">
    <TabQuestionDeQuiz></TabQuestionDeQuiz>
    <div className="add-choix">
      <a href="#"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></a>
      <p>Ajouter un choix</p>
    </div>
    <div className="bloc-choix">
      <label htmlFor="choix">1.</label>
      <input type="text" name="choix" id="choix" />
      <a href="#"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></a>
    </div>
    <div className="bloc-reponse">
      <label htmlFor="reponse">Reponse correcte</label>
      <input type="text" name="reponse" id="reponse" placeholder="1,2" />
      <p>utiliser la virgule(,) pour les reponses multiples</p>
    </div>
    <div className="score">
      <label htmlFor="score">Points</label>
      <input type="number" name="score" id="score" />
    </div>
  </div>
    </div>;
  }

}

export default QuizTab;