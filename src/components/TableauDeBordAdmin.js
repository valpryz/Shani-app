import React from 'react';
import styled from 'styled-components';
import Header from './Header'

const TouteLaPage = styled.div`
    display: grid;


`

class TableauDeBordAdmin extends React.Component {
  render(){
    return (
      <TouteLaPage>
        <Header />
      </TouteLaPage>
    );
  }
  
}

export default TableauDeBordAdmin;