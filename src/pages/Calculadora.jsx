import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Calculadora() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((item) => {
      item.onclick = () => {
        if (item.id === "clear") {
          setDisplayText("");
        } else if (item.id === "backspace") {
          setDisplayText(prevText => prevText.slice(0, -1));
        } else if (displayText !== "" && item.id === "equal") {
          setDisplayText(eval(displayText).toString());
        } else if (displayText === "" && item.id === "equal") {
          setDisplayText("Empty!");
          setTimeout(() => setDisplayText(""), 3000);
        } else {
          setDisplayText(prevText => prevText + item.id);
        }
      };
    });
  }, [displayText]);

  return (
    <div>
      <Navbar />

      <div className="container-fluid1">
        <div className="calculator dark">
          <div className="display-screen">
            <div id="display">{displayText}</div>
          </div>
          <div className="buttons">
            <div>
              <button className="btn-operator" id="clear">C</button>
              <button className="btn-operator" id="*">*</button>
              <button className="btn-operator" id="/">/</button>
              <button className="btn-operator" id="backspace">B</button>
            </div>
            <div>
              <button className="btn-number" id="7">7</button>
              <button className="btn-number" id="8">8</button>
              <button className="btn-number" id="9">9</button>
              <button className="btn-operator" id="-">-</button>
            </div>
            <div>
              <button className="btn-number" id="4">4</button>
              <button className="btn-number" id="5">5</button>
              <button className="btn-number" id="6">6</button>
              <button className="btn-operator" id="+">+</button>
            </div>
            <div>
              <button className="btn-number" id="1">1</button>
              <button className="btn-number" id="2">2</button>
              <button className="btn-number" id="3">3</button>
              <button className="btn-equal" id="equal">=</button>
            </div>
            <div>
              <button className="btn-operator"></button>
              <button className="btn-number" id="0">0</button>
              <button className="btn-operator"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}