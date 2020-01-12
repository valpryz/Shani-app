import React from "react";

class TabQuestionDeQuiz extends React.Component {
  render() {
    return <div className="bloc-question">
  <label htmlFor="question">Question</label>
  <textarea name="question" id="question" cols={30} rows={10} defaultValue={""} />
  <a href="#"><img src="assets/icon/navigation/expand_more_24px_outlined.svg" alt /></a>
    </div>;
  }

}

export default TabQuestionDeQuiz;