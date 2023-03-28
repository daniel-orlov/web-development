import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <div>
        <h1 className="heading">Big letters here</h1>
        <p contentEditable="true" spellCheck="false">Editable content on this line</p>
    </div>,
    document.getElementById("root")
);

