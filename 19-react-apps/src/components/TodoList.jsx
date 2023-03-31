import {useState} from "react";
import {TodoItem} from "./TodoItem";
import {InputArea} from "./InputArea";

export function TodoList() {
    const [itemsList, setItemsList] = useState([]);

    const addItem = (newItem) => {
        if (newItem !== "") {
            setItemsList(prevItemsList => (
                [...prevItemsList, newItem]
            ))
        }
    }

    const deleteItem = (itemIndex) => {
        setItemsList(prevItemsList => (
            prevItemsList.filter((_, index) => index !== itemIndex)
        ))
    }

    return (
        <div>
            <h1>To-do List</h1>
            <InputArea onAddItem={addItem}/>
            <ul>
                {itemsList.map((item, index) => (
                    <TodoItem key={index} id={index} text={item} onClick={deleteItem}/>
                ))}
            </ul>
        </div>
    )
}