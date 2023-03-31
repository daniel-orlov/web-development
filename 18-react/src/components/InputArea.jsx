import {Input} from "./Input";
import {useState} from "react";

export function InputArea(props) {
    const [note, setNote] = useState({
        id: 0, heading: "", content: ""
    });

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote, [name]: value
            }
        });
    }

    return (<div>
        <Input type="text" placeholder="Enter title" onChange={changeHandler} value={note.title}
               name="heading"/>
        <Input type="text" placeholder="Type here..." onChange={changeHandler} value={note.body}
               name="content"/>
        <button type="button" onClick={() => {
            props.onAdd(note)
            setNote(prevState => ({
                id: prevState.id + 1, heading: "", content: ""
            }))
        }}>Add
        </button>
    </div>)
}