
import React from "react";

const EnteteDePage =(props)=>{
  return (
    <div className="entete">
      <h1>{props.title}</h1>
      <p>{props.resume}</p>
    </div>)
}

export default EnteteDePage;