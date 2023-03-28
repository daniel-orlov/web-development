import React from "react";
import ReactDOM from "react-dom";

const author = "Dan";
const currentDate = Date();
const currentYear = currentDate.getFullYear();

console.log(currentYear);

ReactDOM.render(
    <div>
        <p>Created by {author}.</p>
        <p>© {currentDate.getFullYear()}</p>
    </div>,
    document.getElementById("root")
);

