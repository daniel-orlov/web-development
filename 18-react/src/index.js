import React from "react";
import ReactDOM from "react-dom";

const itemType = "circle"

ReactDOM.render(
    <div>
        <h1>A list of items</h1>
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

