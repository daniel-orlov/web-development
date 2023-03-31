import {Login} from "./components/Login";
import {useState} from "react";
import {TodoList} from "./components/TodoList";

let isLogged = false;

export function App() {
    const [count, setCount] = useState(0);

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div className="container">
            {isLogged ? <h1>Welcome to the app</h1> : <Login/>}
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <p>{time}</p>
            <TodoList/>
        </div>
    )
}