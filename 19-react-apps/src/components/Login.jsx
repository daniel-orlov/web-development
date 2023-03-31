import {Input} from "./Input";
import {useState} from "react";

export function Login() {
    const defaultButtonText = "Click me, please";

    const [buttonText, setButtonText] = useState(defaultButtonText);

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    })

    const handleMouseOver = () => {
        setButtonText("Go ahead, what are you waiting for?");
    }

    const handleMouseOut = () => {
        setButtonText(defaultButtonText);
    }

    const changeHandler = (event) => {
        const {value, name} = event.target;
        setFullName( prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    return (
        <div>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <Input type="text" placeholder="First name" onChangeHanlder={changeHandler} value={fullName.fName} name={"fName"}/>
            <Input type="text" placeholder="Last name" onChangeHanlder={changeHandler} value={fullName.lName} name={"lName"}/>
            <Input type="password" placeholder="Password" onChangeHanlder={(event) => console.log(event.target.value)}/>
            <button>Login</button>
            <br/>
            <button type="button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{buttonText}</button>
        </div>
    )
}