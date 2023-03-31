import {InputOneLine} from "./InputOneLine";
import {useState} from "react";
import {InputMultiLine} from "./InputMultiLine";

export function CreateArea(props) {
    const [note, setNote] = useState({
        heading: "", content: ""
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
        <form>
            <InputOneLine type="text" placeholder="Enter title" onChange={changeHandler} value={note.heading}
                          name="heading"/>
            <InputMultiLine type="text" placeholder="Type here..." onChange={changeHandler} value={note.content}
                            name="content" rows="4"/>
            <button type="button" onClick={() => {
                props.onAdd(note);
                setNote( {
                        heading: "", content: ""
                })
                console.log("Note added: ");
                console.log(note);
            }}>Add
            </button>
        </form>
    </div>)
}