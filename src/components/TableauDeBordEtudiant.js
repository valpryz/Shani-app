import React from 'react';
import styled from 'styled-components';
import Header from './communs/Header'
import EnteteDePage from './communs/EnteteDePage'
import NavigationTabStudent from './communs/NavigationTabStudent';

const TouteLaPage = styled.div`
    display: grid;


`

class TableauDeBordEtudiant extends React.Component {
    render(){
        return(
        <TouteLaPage>
            <Header />
            <EnteteDePage />
            <NavigationTabStudent />
        </TouteLaPage>
        )
    }
}

export default TableauDeBordEtudiant;