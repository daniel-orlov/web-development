import "./App.css";
import {useEffect, useReducer, useRef, useState} from "react";

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

    const submitStack = (e) => {
        e.preventDefault();
        setTech({frontendFramework: e.target[0].value, backendLanguage: e.target[1].value, haveTried: false})
        setFrontendFrameworks([...frontendFrameworks, {name: e.target[0].value, id: frontendFrameworks.length + 1}])
        setBackendLanguages([...backendLanguages, {name: e.target[1].value, id: backendLanguages.length + 1}])
    }

    const [backendLanguages, setBackendLanguages] = useState([{name: "Node", id: 1}, {
        name: "Python", id: 2
    }, {name: "Go", id: 3}])
    const [frontendFrameworks, setFrontendFrameworks] = useState([{name: "React", id: 1}, {
        name: "Vue", id: 2
    }, {name: "Angular", id: 3}])

    const colorTitle = useRef();
    const colorHex = useRef();

    const submitColor = (e) => {
        e.preventDefault();
        const title = colorTitle.current.value;
        const hex = colorHex.current.value;
        alert(`New Color: ${title} ${hex}`)
        colorTitle.current.value = "";
        colorHex.current.value = "#000000";
    }

    return (<div className="App">
        <h1>Hello from {tech.frontendFramework}</h1>
        {frontendFrameworks.map((framework) => {
            return <button key={framework.id} onClick={() => setTech({
                ...tech, frontendFramework: framework.name
            })}>{framework.name}</button>
        })}

        <h2>We are using {tech.backendLanguage} in the Backend</h2>
        {backendLanguages.map((language) => {
            return <button key={language.id}
                           onClick={() => setTech({...tech, backendLanguage: language.name})}>{language.name}</button>
        })}

        <h3>{tech.haveTried ? " Awesome! You have tried this stack combo." : "Have you tried this stack combination?"}</h3>
        <input type="checkbox" value={tech.haveTried} onChange={() => setTech({...tech, haveTried: !tech.haveTried})}/>
        <label>Yes</label>

        <h4>Not on the list? Add your own!</h4>
        <form onSubmit={submitStack}>
            <input type="text" placeholder="Frontend Framework" value={tech.frontendFramework}
                   onChange={(e) => setTech({...tech, frontendFramework: e.target.value})}/>
            <input type="text" placeholder="Backend Language" value={tech.backendLanguage}
                   onChange={(e) => setTech({...tech, backendLanguage: e.target.value})}/>
            <button type="submit">Submit</button>
        </form>

        <h4>Let's pick your favourite color!</h4>
        <form onSubmit={submitColor}>
            <input type="text" placeholder="Color Title" ref={colorTitle}/>
            <input type="color" placeholder="Color Hex" ref={colorHex}/>
            <button type="submit">Submit</button>
        </form>

    </div>);
}

export default App;
