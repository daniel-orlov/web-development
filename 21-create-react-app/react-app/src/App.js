import "./App.css";
import {useEffect, useState} from "react";

function App() {
    const [tech, setTech] = useState({
        frontendFramework: "React", backendLanguage: "Node"
    })

    useEffect(() => {
        console.log("Frontend Framework: ", tech.frontendFramework)
        console.log("Backend Language: ", tech.backendLanguage)
    }, [tech])

    return (<div className="App">
        <h1>Hello from {tech.frontendFramework}</h1>
        <button onClick={() => setTech({...tech, frontendFramework: "React"})}>React</button>
        <button onClick={() => setTech({...tech, frontendFramework: "Vue"})}>Vue</button>
        <button onClick={() => setTech({...tech, frontendFramework: "Angular"})}>Angular</button>

        <h2>We are using {tech.backendLanguage} in the Backend</h2>
        <button onClick={() => setTech({...tech, backendLanguage: "Node"})}>Node</button>
        <button onClick={() => setTech({...tech, backendLanguage: "Python"})}>Python</button>
        <button onClick={() => setTech({...tech, backendLanguage: "Go"})}>Go</button>
    </div>);
}

export default App;
