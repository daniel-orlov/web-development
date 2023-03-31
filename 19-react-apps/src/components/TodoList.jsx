import {useState} from "react";
import {TodoItem} from "./TodoItem";
import {InputArea} from "./InputArea";

export function TodoList() {
    const [newItem, setNewItem] = useState("");
    const [itemsList, setItemsList] = useState([]);


    const deleteItem = (itemIndex) => {
        setItemsList(prevItemsList => (
            prevItemsList.filter((_, index) => index !== itemIndex)
        ))
    }
    return (
        <div>
            <h1>To-do List</h1>
            <InputArea newItem={newItem} setNewItem={setNewItem} setItemsList={setItemsList}/>
            <ul>
                {itemsList.map((item, index) => (
                    <TodoItem key={index} id={index} text={item} onClick={deleteItem}/>
                ))}
            </ul>
        </div>
    )
}