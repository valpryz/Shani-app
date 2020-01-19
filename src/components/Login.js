import React from 'react'
import styled from 'styled-components'
import BlocDemarrage from './communs/BlocDemarrage'
import BlocLogin from './communs/BlocLogin'

const Full = styled.div`
    display: grid;
    grid-template-columns: 37% 63%;
    height: 100vh;
    width: 100%;
`

const Left = styled.div`
    background: #132235;
    padding: 0 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class Login extends React.Component {
    render(){
        return (
            <Full>
                <Left>
                    <BlocDemarrage />
                </Left>
                <Right>
                    <BlocLogin />
                </Right>
            </Full>        )
    }
}

export default Login;