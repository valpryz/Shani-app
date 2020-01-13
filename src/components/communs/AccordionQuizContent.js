import React from "react";
import ItemDeQuiz from "./ItemDeQuiz";

class AccordionQuizContent extends React.Component {
  render() {
    return (
        <div>
            <ItemDeQuiz />
            <ItemDeQuiz />
            <ItemDeQuiz />
            <ItemDeQuiz />
            <ItemDeQuiz />
        </div>
    )
  }

}

export default AccordionQuizContent;