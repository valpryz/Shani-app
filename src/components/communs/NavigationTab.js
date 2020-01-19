import React from "react";
import styled from 'styled-components';
import Carte from './Carte'
import AccordionContainerCours from "./AccordionContainerCours";
import AccordionCourseContent from "./AccordionCourseContent";
import AccordionContainerQuiz from "./AccordionContainerQuiz";
import AccordionQuizContent from "./AccordionQuizContent"
import RechercheUtilisateur from "./RechercheUtilisateur";
import ListingUtilisateurs from "./ListingUtilisateurs";
import FormCreationCours from "./FormCreationCours";
import FormCreationModule from "./FormCreationModule";
// import FormCreationQuiz from "./FormCreationQuiz";
import professeur from '../communs/assets/layers/professor-consultation.png'
import etudiant from '../communs/assets/layers/student-bold.png'
import cours from '../communs/assets/layers/online-class.png'
import inscrits from '../communs/assets/layers/save-money.png'
import quiz from '../communs/assets/layers/diploma.png'
import FormCreationLecon from "./FormCreationLecon";

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`

`
const CartesWrapper = styled.div`
  display: grid;
  width: calc(100% - 30px);
  grid-template-columns: repeat(4,1fr);
  grid-gap: 30px 10px;
  margin-bottom: 40px;
`

class NavigationTab extends React.Component {
  render() {
    return <div className="navigation-tab">
  <input defaultChecked="checked" type="radio" name="tab" id="tab1" />
  <input type="radio" name="tab" id="tab2" />
  <input type="radio" name="tab" id="tab3" />
  <input type="radio" name="tab" id="tab4" />
  <input type="radio" name="tab" id="tab5" />
  
  <nav>
    <ul>
      <li className="tab1">
        <label htmlFor="tab1">aperçu</label>
      </li>
      <li className="tab2">
        <label htmlFor="tab2">utilisateurs</label>
      </li>
      <li className="tab3">
        <label htmlFor="tab3">cours</label>
      </li>
      <li className="tab4">
        <label htmlFor="tab4">modules</label>
      </li>
      <li className="tab5">
        <label htmlFor="tab5">leçon</label>
      </li>
    </ul>
  </nav>
  <section>
    <div className="tab1">
        <WrapperFull>
          <WrapperLeft>
            <CartesWrapper>
              <Carte titre='formateurs' valeur='0' image={professeur}/>
              <Carte titre='étudiants' valeur='0' image={etudiant}/>
              <Carte titre='cours' valeur='0' image={cours}/>
              <Carte titre='inscrits' valeur='0' image={inscrits}/>
              <Carte titre='quiz complétés' valeur='0' image={quiz}/>
            </CartesWrapper>
            <AccordionContainerCours>
              <AccordionCourseContent />
            </AccordionContainerCours>
            <AccordionContainerQuiz>
              <AccordionQuizContent />
            </AccordionContainerQuiz>
          </WrapperLeft>
          <WrapperRight>
            
          </WrapperRight>
        </WrapperFull>
    </div>
    <div className="tab2">
      <WrapperFull>
        <WrapperLeft>
          <RechercheUtilisateur />
          <ListingUtilisateurs />    
        </WrapperLeft>
        <WrapperRight>
        
        </WrapperRight>
      </WrapperFull> 
    </div>
    <div className="tab3">
      <FormCreationCours />
    </div>
    <div className="tab4">
      <FormCreationModule /> 
    </div>
    <div className="tab5">
      <FormCreationLecon />
    </div>
  </section>
    </div>;
  }

}

export default NavigationTab;