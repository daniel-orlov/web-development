import "./App.css";
import {useState} from "react";

function App() {
    const [tech, setTech] = useState("React")

    return (<div className="App">
        <h1>Hello from {tech}</h1>
        <button onClick={() => setTech("React")}>React</button>
        <button onClick={() => setTech("Vue")}>Vue</button>
        <button onClick={() => setTech("Svelte")}>Svelte</button>
    </div>);
}

export default App;
