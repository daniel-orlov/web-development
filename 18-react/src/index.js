import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <div>
        <h1 className="heading">Big letters here</h1>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
        <img className="rounded-square image" src="react.png" alt="react logo"/>
    </div>,
    document.getElementById("root")
);

