import React from 'react'
import styled from 'styled-components'
import FormateurInfos from './FormateurInfos'
import RenduQuiz from './RenduQuiz'
import FlechesCours from './FlechesCours'

const WrapperFull = styled.div`

`

class NavigationTabCours extends React.Component {
    render() {
      return <div className="navigation-tab">
    <input defaultChecked="checked" type="radio" name="tab" id="tab1" />
    <input type="radio" name="tab" id="tab2" />
    <nav>
      <ul>
        <li className="tab1">
          <label htmlFor="tab1">lecon</label>
        </li>
        <li className="tab2">
          <label htmlFor="tab2">ressources</label>
        </li>
      </ul>
    </nav>
    <section>
      <div className="tab1">
          <WrapperFull>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at reiciendis perspiciatis autem possimus officiis, dolore facere deleniti laudantium ipsa ex qui, fugiat reprehenderit sint totam consequatur aut mollitia itaque?</p>

            <FormateurInfos />
            <RenduQuiz />
            <FlechesCours />
          </WrapperFull>
      </div>
      <div className="tab2">
        <WrapperFull>
          
        </WrapperFull> 
      </div>
      
    </section>
      </div>;
    }
  
  }
  
  export default NavigationTabCours;