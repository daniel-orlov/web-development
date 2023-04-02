import "./App.css";
import {useEffect, useState} from "react";

function App() {
    const [frontendFramework, setFrontendFramework] = useState("React")
    const [backendLanguage, setBackendLanguage] = useState("Node")

    useEffect(() => {
        console.log("Frontend Framework: ", frontendFramework)
        console.log("Backend Language: ", backendLanguage)
    }, [frontendFramework, backendLanguage])

    return (<div className="App">
        <h1>Hello from {frontendFramework}</h1>
        <button onClick={() => setFrontendFramework("React")}>React</button>
        <button onClick={() => setFrontendFramework("Vue")}>Vue</button>
        <button onClick={() => setFrontendFramework("Svelte")}>Svelte</button>

        <h2>We are using {backendLanguage} in the Backend</h2>
        <button onClick={() => setBackendLanguage("Node")}>Node</button>
        <button onClick={() => setBackendLanguage("Go")}>Go</button>
        <button onClick={() => setBackendLanguage("Python")}>Python</button>
    </div>);
}

export default App;
