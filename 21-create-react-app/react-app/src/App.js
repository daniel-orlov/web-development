import "./App.css";
import {useEffect, useReducer, useState} from "react";

const GitHubUser = (props) => {
    return <>
        <h2>My GitHub Profile</h2>
        <div className="github-profile">
            <img height="200" src={props.data.avatar_url} alt="GitHub Profile Picture"/>
            <div className="info">
                <div className="name">{props.data.name}</div>
                <div className="company">{props.data.company}</div>
            </div>
        </div>
    </>
}

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

    // Custom Hook to automatically reset the value of the input field
    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);
        const reset = () => {
            setValue(initialValue);
        }
        return [{value, onChange: (e) => setValue(e.target.value)}, reset];
    }


    const [colorTitle, resetColorTitle] = useInput("");
    const [colorHex, resetColorHex] = useInput("#000000");

    const submitColor = (e) => {
        e.preventDefault();
        alert(`New Color: ${colorTitle.value} ${colorHex.value}`);
        resetColorTitle();
        resetColorHex();
    }

    const userAPIEndpoint = "https://api.github.com/users/daniel-orlov";
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(userAPIEndpoint)
            .then(response => response.json())
            .then(data => setUserData(data))
            .then(() => setLoading(false))
            .catch(error => setError(error))
    }, [])


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
            <input type="text" placeholder="Color Title" {...colorTitle}/>
            <input type="color" placeholder="Color Hex" {...colorHex}/>
            <button type="submit">Submit</button>
        </form>

        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {userData && <GitHubUser data={userData}/>}
    </div>);
}

export default App;
