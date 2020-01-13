import React from 'react';
import styled from 'styled-components';
import Header from './communs/Header';
import EnteteDePage from './communs/EnteteDePage';
import NavigationTabTeacher from './communs/NavigationTabTeacher';

const TouteLaPage = styled.div`
    display: grid;


`

class TableauDeBordTeacher extends React.Component {
  render(){
    return (
      <TouteLaPage>
        <Header />
        <EnteteDePage />
        <NavigationTabTeacher />
      </TouteLaPage>
    );
  }
  
}

export default TableauDeBordTeacher;