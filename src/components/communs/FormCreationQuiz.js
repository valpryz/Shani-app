
import React from "react";
import QuizTab from "./QuizTab";
import styled from 'styled-components';

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`

`

class FormCreationQuiz extends React.Component {
  render() {
    return (
      <form>
        <WrapperFull>
          <WrapperLeft>
            <div className="quiz">
              <h2>details sur le quiz</h2>
              <div className="det">
                <input type="text" placeholder="titre du quiz" />
                <div className="type-quiz">
                  <label htmlFor="type-quiz">Type de quiz</label>
                  <select name="lecon" id="lecon">
                    <option value="lecon">Lecon</option>
                  </select>
                </div>
              </div>
              <h2>parametres du quiz</h2>
              <h2>modules</h2>
              <p><em>si vous creez un quiz pour le cours, alors module correspond a un module. Si vous creez un quiz pour la lecon, alors vous n'avez pas besoin de creer un module supplementaire.</em></p>
            </div>
            <button>+</button>
            <QuizTab></QuizTab>    
          </WrapperLeft>
          <WrapperRight>
           <button>Enregistrez</button>
          </WrapperRight>
      </WrapperFull>
    </form>
    )
  }

}

export default FormCreationQuiz;