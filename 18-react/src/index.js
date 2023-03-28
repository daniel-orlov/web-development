import React from "react";
import ReactDOM from "react-dom";


const customStyle = {
    color: "pink",
    border: "2px black solid"
}

ReactDOM.render(
    <div>
        <h1 className="heading">Big letters here</h1>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
        <img className="rounded-square image" src="react.png" alt="react logo"/>
        <p style={customStyle}>Some bordered pink text that is hard to read</p>
    </div>,
    document.getElementById("root")
);

