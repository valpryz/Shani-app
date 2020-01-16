import React from 'react';
import styled from 'styled-components';
import StudentCourseCard from './StudentCourseCard';

const WrapperFull = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 35px;

`

const WrapperLeft = styled.div`

`

const WrapperRight = styled.div`

`

class NavigationTabStudent extends React.Component {
    render(){
        return(
            <div className="navigation-tab">
                <input defaultChecked="checked" type="radio" name="tab" id="tab1" />
                <input type="radio" name="tab" id="tab2" />

                <nav>
                    <ul>
                    <li className="tab1">
                        <label htmlFor="tab1">cours</label>
                    </li>
                    </ul>
                </nav>
                <section>
                    <div className="tab1">
                        <WrapperFull>
                            <WrapperLeft>
                                <StudentCourseCard />
                            </WrapperLeft>
                            <WrapperRight>
                                
                            </WrapperRight>
                        </WrapperFull>
                    </div>
                </section>
            </div>
        )
    }
}

export default NavigationTabStudent;