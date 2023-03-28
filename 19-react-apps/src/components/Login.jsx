import {Input} from "./Input";
import {useState} from "react";

export function Login() {
    const defaultButtonText = "Click me, please";

    const [buttonText, setButtonText] = useState(defaultButtonText);

    const handleMouseOver = () => {
        setButtonText("Go ahead, what are you waiting for?");
    }

    const handleMouseOut = () => {
        setButtonText(defaultButtonText);
    }

    return (
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
            <br/>
            <button type="button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{buttonText}</button>
        </form>
    )
}