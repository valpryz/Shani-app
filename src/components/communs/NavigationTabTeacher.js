import React from 'react';
import styled from 'styled-components';
import FormEditionCoursTeacher from './FormEditionCoursTeacher';
import Carte from './Carte'
import CarteDeCours from './CarteDeCours';

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`

`

const WrapperCourse = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

class NavigationTabTeacher extends React.Component {
    render(){
        return(
            <div className="navigation-tab">
  <input defaultChecked="checked" type="radio" name="tab" id="tab1" />
  <input type="radio" name="tab" id="tab2" />
  
  <nav>
    <ul>
      <li className="tab1">
        <label htmlFor="tab1">apercu</label>
      </li>
      <li className="tab2">
        <label htmlFor="tab2">lecons</label>
      </li>
    </ul>
  </nav>
  <section>
    <div className="tab1">
        <WrapperFull>
          <WrapperLeft>
            <Carte />
            <h1>Cours</h1>
            <WrapperCourse>
                <CarteDeCours />
                <CarteDeCours />
            </WrapperCourse>
          </WrapperLeft>
          <WrapperRight>
            
          </WrapperRight>
        </WrapperFull>
    </div>
    <div className="tab2">
      <FormEditionCoursTeacher />
    </div>
    
  </section>
    </div>
        )
    }
}

export default NavigationTabTeacher;