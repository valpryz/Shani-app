import React from 'react'
import chevron from './assets/icon/navigation/expand_more_24px_outlined.svg'
import close from './assets/icon/navigation/close_24px_outlined.svg'
import TabModule from './TabModule'

class AccordionModule extends React.Component {
    render(){
        return (
            <div className="accordion-container">
                <input type="checkbox" name="accord" id="accordion1" defaultChecked="checked" />
                <label htmlFor="accordion1">
                    Module 1
                    <div className="chevron-delete">
                    <button className='button-poubelle'><img src={chevron} alt="fleche-rotation" /></button> 
                    <button className='button-poubelle'><img src={close} alt="fleche-rotation" /></button>
                    </div>
                </label>
                <div className='accordion-content'>
                    <TabModule />
                </div>
            </div>
        )
    }
}

export default AccordionModule;