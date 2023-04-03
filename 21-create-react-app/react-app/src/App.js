import "./App.css";
import {Link, Outlet} from "react-router-dom";

function Nav() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/history">History</Link>
        <Link to="/contact">Contact</Link>
    </nav>
}

export function Home() {
    return <>
        <Nav/>
        <h1>Home</h1>
    </>
}

export function About() {
    return <>
        <Nav/>
        <h1>About</h1>
        <Outlet/>
    </>
}

export function History() {
    return <>
        <h1>History</h1>
    </>
}

export function Contact() {
    return <>
        <Nav/>
        <h1>Contact</h1>
    </>
}

function App() {
    return (<>
        <Nav/>
        <h1>App</h1>
    </>);
}

export default App;
