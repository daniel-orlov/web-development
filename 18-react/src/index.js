import React from "react";
import ReactDOM from "react-dom";

const author = "Dan";
const currentYear = 2023
// For some reason the below code doesn't work. Will investigate later.
// const currentYear = Date().getFullYear();

ReactDOM.render(
    <div>
        <p>Created by {author}.</p>
        <p>© {currentYear}</p>
    </div>,
    document.getElementById("root")
);

