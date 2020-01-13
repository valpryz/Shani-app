import React from "react";
import expand from './assets/icon/navigation/expand_more_24px_outlined.svg'

class TabQuestionDeQuiz extends React.Component {
  render() {
    return <div className="bloc-question">
  <label htmlFor="question">Question</label>
  <textarea name="question" id="question" cols={30} rows={10} defaultValue={""} />
  <img src={expand} alt='expand' />
    </div>;
  }

}

export default TabQuestionDeQuiz;