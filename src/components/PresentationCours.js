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
    grid-template-columns: 2fr 1.1fr;
    grid-gap: 20px;
    margin: 15px 35px;
    
`
const Video = styled.div`
    margin: auto auto 50px 35px;
    display: grid;
    grid-row-gap: 20px;
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
                <Video>
                    <h1>Presentation de la formation</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=TTSxaWiNrBE' width='94vw' height='100vh'/>
                    </Video>
                <h1>Programme</h1>
            </TouteLaPage>
        )
    }
}

export default PresentationCours;