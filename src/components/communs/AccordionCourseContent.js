import React from "react";
import styled from 'styled-components';
import CarteDeCours from './CarteDeCours';

const WrapperCourse = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

class AccordionCourseContent extends React.Component {
  render() {
    return (
      <WrapperCourse>
        <CarteDeCours />
        <CarteDeCours />
        <CarteDeCours />
        <CarteDeCours />   
      </WrapperCourse>
    )
  }

}

export default AccordionCourseContent;