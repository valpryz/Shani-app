import React from 'react'
import styled from 'styled-components'
import chevron from './assets/icon/navigation/expand_more_24px_outlined.svg'
import ModuleLeconCreation from './ModuleLeconCreation'
import deletion from './assets/icon/action/delete_24px_outlined.svg';

const Cut = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    grid-gap: 10px;
    
`

class AccordionModule extends React.Component {
    render(){
        return (
            <Cut>
                <div className="accordion-lecon-container">
                <input type="checkbox" name="accord" id="accordion1" defaultChecked="checked" />
                <label htmlFor="accordion1">Leçon 1<img src={chevron} alt="fleche-rotation" /></label>
                <div className='accordion-lecon-content'>
                    <ModuleLeconCreation /> 
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