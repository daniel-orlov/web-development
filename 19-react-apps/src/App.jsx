import {Login} from "./components/Login";
import {useState} from "react";

let isLogged = false;

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            {isLogged ? <h1>Welcome to the app</h1> : <Login/>}
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}