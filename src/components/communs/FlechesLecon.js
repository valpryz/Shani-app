import React from "react";

class FlechesLecon extends React.Component {
  render() {
    return (<div className="fleches-lecon">
  <div className="fleche-precedent">
    <button></button>
      <h4>lecon precedente</h4>
  </div>    
  <div className="fleche-suivant">
    <h4>lecon suivante</h4>
    <button>-></button>
  </div>
    </div>)
  }

}

export default FlechesLecon;