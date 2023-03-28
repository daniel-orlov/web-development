import {Login} from "./components/Login";

let isLogged = false;

export function App() {
    return (
        <div className="container">
            <h1>Hello</h1>
            <Login />
        </div>
    )
}