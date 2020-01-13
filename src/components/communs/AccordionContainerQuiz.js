
import React from "react";
import AccordionQuizContent from "./AccordionQuizContent";

class AccordionContainerQuiz extends React.Component {
  render() {
    return (
        <div className="accordion-container">
            <input type="checkbox" name="accord" id="accordion2" defaultChecked="checked" />
            <label htmlFor="accordion2">Quiz<img src alt="fleche-rotation" /></label>
            <div className='accordion-content'>
                <AccordionQuizContent />  
            </div>
        </div>
    )
  }

}

export default AccordionContainerQuiz;