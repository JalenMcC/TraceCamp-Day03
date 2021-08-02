import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';

function Start({onClick, bg}) {
  return (
    <button className = {"start-" + bg} onClick = {onClick}>
      Start
    </button>
  );
}



function Main() {
  const [level, setLevel] = useState(0); //literally just a storage for level
  const [correct, setCorrect] = useState(true);
  const [color, setColor] = useState("grey");

  function renderStartButton() {
    return(
      <Start 
        onClick = {() => {
          //reset useState values
          if (correct === true) {
            setColor("green");
          }
          else {
            setColor("red");
          }
          setLevel(level + 1);
          setCorrect(!correct);
        }}

        bg={color}
      />
    );
  }

  return (
    <div>
      <p>You clicked {level} times.</p>
      <p>The color is {color}.</p>
      <p>The answer is {correct ? "wrong" : "correct"}!</p>
      <div className="start-button">{renderStartButton()}</div>
    </div>
  );
}


ReactDOM.render(<Main />, document.getElementById("root"));

