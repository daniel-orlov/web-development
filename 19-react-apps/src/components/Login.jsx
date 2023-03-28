import {Input} from "./Input";
import {useState} from "react";

export function Login() {

    const [formHeading, setFormHeading] = useState("Login");

    const handleClick = () => {
        setFormHeading("Welcome");
        console.log("clicked");
    }

    return (
        <form className="form">
            <h1>{formHeading}</h1>
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
            <button type="button" onClick={handleClick}>Click me</button>
        </form>
    )
}