
import React from "react";
import AccordionQuizContent from "./AccordionQuizContent";
import chevron from './assets/icon/navigation/expand_more_24px_outlined.svg'

class AccordionContainerQuiz extends React.Component {
  render() {
    return (
        <div className="accordion-container">
            <input type="checkbox" name="accord" id="accordion2" defaultChecked="checked" />
            <label htmlFor="accordion2">Quiz<img src={chevron} alt="fleche-rotation" /></label>
            <div className='accordion-content'>
                <AccordionQuizContent />  
            </div>
        </div>
    )
  }

}

export default AccordionContainerQuiz;