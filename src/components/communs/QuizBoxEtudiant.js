import React from "react";

class QuizBoxEtudiant extends React.Component {
  render() {
    return <div className="quiz-rendu-box">
  <h1>Quizz</h1>
  <p>Design Thinking is suited to problems which:</p>
  <p>(3 points)</p>
  <ul>
    <li>Need to be only visually solved</li>
    <li>Require a more holistic approach and mindset to solve</li>
    <li>Require a graphic designer's ability to see the solution</li>
  </ul>
  <button>valider</button>
    </div>;
  }

}

export default QuizBoxEtudiant;