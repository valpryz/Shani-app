import React from "react";
import deletion from './assets/icon/action/delete_24px_outlined.svg'

class TabQuestionDeQuiz extends React.Component {
  render() {
    return <div className="bloc-question">
  <label htmlFor="question">Question</label>
  <textarea name="question" id="question" cols={30} rows={10} defaultValue={""} />
  <button className='button-poubelle'><img src={deletion} /></button>
    </div>;
  }

}

export default TabQuestionDeQuiz;