import React from 'react'
import chevron from './assets/icon/navigation/expand_more_24px_outlined.svg'
import deletion from './assets/icon/action/delete_24px_outlined.svg';
import TabModule from './TabModule'
import styled from 'styled-components'

const Cut = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    grid-gap: 10px;
    
`

class AccordionModule extends React.Component {
    render(){
        return (
            <Cut>
                <div className="accordion-module-container">
                <input type="checkbox" name="accord" id="accordion1" defaultChecked="checked" />
                <label htmlFor="accordion1">Module 1<img src={chevron} alt="fleche-rotation" /></label>
                <div className='accordion-module-content'>
                    <TabModule />  
                </div>
                </div>
                <div>
                    <button className="button-poubelle lecon-module"><img src={deletion} alt="fleche-rotation" /></button>
                </div>
            </Cut>
        )
    }
}

export default AccordionModule;