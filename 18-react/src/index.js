import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import BorderedText from "./BorderedText";

ReactDOM.render(
    <div>
        <Heading/>
        <List/>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
        <img className="rounded-square image" src="react.png" alt="react logo"/>
        <BorderedText/>
    </div>,
    document.getElementById("root")
);

