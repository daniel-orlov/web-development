import React from "react";
import ReactDOM from "react-dom";


const customStyle = {
    color: "pink",
    border: "2px black solid"
}

const greetingStyle = {
    color: "black"
}

const greet = function () {
    const currentHours = new Date().getHours();
    if (currentHours < 12) {
        greetingStyle.color = "red";
        return "Good morning!";
    } else if (currentHours < 18) {
        greetingStyle.color = "green"
        return "Good afternoon!";
    } else {
        greetingStyle.color = "blue"
        return "Good evening!";
    }
}

ReactDOM.render(
    <div>
        <h1 className="heading" style={greetingStyle}>{greet()}</h1>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
        <img className="rounded-square image" src="react.png" alt="react logo"/>
        <p style={customStyle}>Some bordered pink text that is hard to read</p>
    </div>,
    document.getElementById("root")
);

