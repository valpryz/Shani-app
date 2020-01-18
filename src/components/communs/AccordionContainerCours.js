
import React from "react";
import AccordionCourseContent from "./AccordionCourseContent";
import chevron from './assets/icon/navigation/expand_more_24px_outlined.svg'

class AccordionContainerCours extends React.Component {
  render() {
    return (
        <div className="accordion-container">
            <input type="checkbox" name="accord" id="accordion1" defaultChecked="checked" />
            <label htmlFor="accordion1">Cours<img src={chevron} alt="fleche-rotation" /></label>
            <div className='accordion-content'>
                <AccordionCourseContent />  
            </div>
        </div>
    )
  }

}

export default AccordionContainerCours;