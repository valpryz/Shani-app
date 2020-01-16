import React from 'react'
import styled from 'styled-components'
import Header from './communs/Header'
import StudentCourseInfo from './communs/StudentCourseInfo'
import StudentProfileCard from './communs/StudentProfileCard'
import ReactPlayer from 'react-player'

const TouteLaPage = styled.div`
    display: grid;
`
const HeadInfo = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    padding: 35px;
`
class PresentationCours extends React.Component {
    render(){
        return (
            <TouteLaPage>
                <Header />
                <HeadInfo>
                    <StudentCourseInfo />
                    <StudentProfileCard />
                </HeadInfo>
                <h1>Presentation de la formation</h1>
                <ReactPlayer url='https://www.youtube.com/watch?v=TTSxaWiNrBE' width='720px' height='480px'/>
                <h1>Programme</h1>
            </TouteLaPage>
        )
    }
}

export default PresentationCours;