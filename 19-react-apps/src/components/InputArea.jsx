import {Input} from "./Input";
import {useState} from "react";

export function InputArea(props) {
    const [newItem, setNewItem] = useState("");

    const changeHandler = (event) => {
        const {value} = event.target;
        setNewItem(value);
    }

    return (<div>
        <Input type="text" placeholder="Type here..." onChangeHanlder={changeHandler} value={newItem}
               name="item"/>
        <button type="button" onClick={() => {
            props.onAddItem(newItem)
            setNewItem("")
        }}>Add
        </button>
    </div>)
}