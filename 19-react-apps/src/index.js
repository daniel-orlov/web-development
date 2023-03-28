import React from "react";
import {createRoot} from "react-dom/client";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import App from "./App";

createRoot(document.getElementById("root")).render(<App/>);
