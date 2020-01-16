import React from "react";
import ModuleLeconCreation from "./ModuleLeconCreation";
import styled from 'styled-components';

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
            <div className="module-creation">
              <input type="text" name="titre" id="titre" placeholder="Initiation a l'entreprenariat" />
              <h4>resume du module</h4>
              <textarea name="resume" id="resume" cols={30} rows={10} defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
              <h4>lecons</h4>
              <button>+</button>
              <ModuleLeconCreation />
              <button>+</button>
            </div>
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