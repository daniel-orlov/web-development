import {useState} from "react";

export function TodoItem(props) {
    const [isDone, setIsDone] = useState(false);

    const crossOut = () => {
        setIsDone(!isDone)
    }

    return (
        <div onClick={crossOut}>
            <li style={{textDecoration: isDone ? "line-through" : null}} >{props.text}</li>
        </div>
    )
}