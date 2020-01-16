import React from 'react'
import Header from './communs/Header'
import styled from 'styled-components'
import NavigationTabCours from './communs/NavigationTabCours'
import profile from './communs/assets/images/africanwomenwalking.jpg'

const CourseContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
`

const Left = styled.div`
    background: #132235;
    color: white;
    width: 100%;
    font-size: 1.2em;
    
`

const Right = styled.div`
    padding-right: 35px;
`

class PageDuCours extends React.Component{
    render(){
        return (
            <div>
            <Header />
            <CourseContainer>
                <Left>
                    <p>Bataillon des entrepreneurs panafricains</p>
                </Left>
                <Right>
                    <img src={profile} alt='jemen' width='100%' />
                    <h1>Entreprenariat, un choix dangereux</h1>
                    <NavigationTabCours />
                </Right>
            
            </CourseContainer>
            </div>
        )
    }
}

export default PageDuCours;