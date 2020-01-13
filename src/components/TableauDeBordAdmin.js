import React from 'react';
import styled from 'styled-components';
import Header from './communs/Header';
import EnteteDePage from './communs/EnteteDePage';
import NavigationTab from './communs/NavigationTab';

const TouteLaPage = styled.div`
    display: grid;


`

class TableauDeBordAdmin extends React.Component {
  render(){
    return (
      <TouteLaPage>
        <Header />
        <EnteteDePage />
        <NavigationTab />
      </TouteLaPage>
    );
  }
  
}

export default TableauDeBordAdmin;