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
        <EnteteDePage title='Tableau de Bord' resume="Retrouvez ici une vue d'ensemble des utilisateurs, cours, webinaires et groupes de discussion."/>
        <NavigationTab />
      </TouteLaPage>
    );
  }
  
}

export default TableauDeBordAdmin;