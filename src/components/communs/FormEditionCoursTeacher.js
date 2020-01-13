
import React from "react";
import SelectionCoursAModifier from "./SelectionCoursAModifier";
import BoutonsSpeciaux from "./BoutonsSpeciaux";
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

class FormEditionCoursTeacher extends React.Component {
  render() {
    return (
      <form>
        <WrapperFull>
          <WrapperLeft>
            <SelectionCoursAModifier />
            <h4>initiation a l'entreprenariat</h4>
            <h4>resume de la lecon</h4>
            <textarea name="resume-teacher" id="resume-teacher" defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
            <div className="composants" />
            <BoutonsSpeciaux />
            <h4>ressources de la lecon</h4>
        
          </WrapperLeft>
          <WrapperRight>
            <button>enregistrer</button>
          </WrapperRight>
        </WrapperFull>
    </form>
    )
  }

}

export default FormEditionCoursTeacher;