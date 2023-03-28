import React from "react";
import ReactDOM from "react-dom";

const listType = "list"
const itemType = "circle"

ReactDOM.render(
    <div>
        <h1>A {`${listType} of ${itemType}s`}</h1>
        <ul>
            <li>
                First {itemType}
            </li>
            <li>
                Second {itemType}
            </li>
            <li>
                Third {itemType}
            </li>
        </ul>
    </div>,
    document.getElementById("root")
);

