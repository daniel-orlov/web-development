import "./App.css";
import {useEffect, useReducer} from "react";

function App() {
    const [tech, setTech] = useReducer((state, newState) => ({...state, ...newState}), {
        frontendFramework: "React", backendLanguage: "Node", haveTried: false
    }, () => {
        const localData = localStorage.getItem("tech");
        return localData ? JSON.parse(localData) : {
            frontendFramework: "React", backendLanguage: "Node", haveTried: false
        }
    })

    useEffect(() => {
        console.log("Frontend Framework: ", tech.frontendFramework)
        console.log("Backend Language: ", tech.backendLanguage)
        console.log("Have Tried: ", tech.haveTried)
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

        <h3>{tech.haveTried ? " Awesome! You have tried this stack combo." : "Have you tried this stack combination?"}</h3>
        <input type="checkbox" value={tech.haveTried} onChange={() => setTech({...tech, haveTried: !tech.haveTried})}/>
        <label>Yes</label>
    </div>);
}

export default App;
