import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";


const customStyle = {
    color: "pink",
    border: "2px black solid"
}

ReactDOM.render(
    <div>
        <Heading/>
        <List/>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
        <img className="rounded-square image" src="react.png" alt="react logo"/>
        <p style={customStyle}>Some bordered pink text that is hard to read</p>
    </div>,
    document.getElementById("root")
);

