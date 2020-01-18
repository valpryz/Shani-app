import React from "react";
import styled from 'styled-components';
import AccordionModule from "./AccordionModule";

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

class FormCreationModule extends React.Component {
  render() {
    return (
      <form>
        <WrapperFull>
          <WrapperLeft>
            <select name="course" id="course">
              <option value="course-1">Bataillon des entrepreneurs panafricains</option>
            </select>
            <AccordionModule />
            <button className='button-square'>+</button>
          </WrapperLeft>
        <WrapperRight>
          <button>enregistrer</button>
        </WrapperRight>
      </WrapperFull>
      </form>
    )
  }

}

export default FormCreationModule;