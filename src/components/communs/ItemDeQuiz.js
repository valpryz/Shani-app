import React from "react";
import expand from '../communs/assets/icon/navigation/expand_more_24px_outlined.svg'

class ItemDeQuiz extends React.Component {
  render() {
    return (
      <div className="quiz-item">
        <p>Lecon 1 Le panafricanisme economique</p>
        <img src={expand} alt='expand' />
    </div>
    )
  }

}

export default ItemDeQuiz;