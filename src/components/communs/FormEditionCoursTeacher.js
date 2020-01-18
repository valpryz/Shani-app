
import React from "react";
import SelectionCoursAModifier from "./SelectionCoursAModifier";
import styled from 'styled-components';
import BlocEditionLecon from "./BlocEditionLecon";

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`
  margin: 0 auto;
`

class FormEditionCoursTeacher extends React.Component {
  render() {
    return (
      <form>
        <WrapperFull>
          <WrapperLeft>
            <SelectionCoursAModifier />          
            <BlocEditionLecon />
        
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