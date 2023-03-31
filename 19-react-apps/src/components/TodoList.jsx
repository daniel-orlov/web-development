import {Input} from "./Input";
import {useState} from "react";

export function TodoList() {
    const [newItem, setNewItem] = useState("");
    const [itemsList, setItemsList] = useState([]);

    const changeHandler = (event) => {
        console.log(event)

        const {value} = event.target;
        setNewItem(value);
    }


    const addItem = () => {
        if (newItem !== "") {
            setItemsList(prevItemsList => (
                [...prevItemsList, newItem]
            ))
            setNewItem("")
        }
    }

    return (
        <div>
            <h1>To-do List</h1>
            <Input type="text" placeholder="Type here..." onChangeHanlder={changeHandler} value={newItem} name="item"/>
            <button type="button" onClick={addItem}>Add</button>
            <ul>
                {itemsList.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}