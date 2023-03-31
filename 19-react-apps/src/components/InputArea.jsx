import {Input} from "./Input";

export function InputArea(props) {
    const changeHandler = (event) => {
        const {value} = event.target;
        props.setNewItem(value);
    }

    const addItem = () => {
        if (props.newItem !== "") {
            props.setItemsList(prevItemsList => (
                [...prevItemsList, props.newItem]
            ))
            props.setNewItem("")
        }
    }

    return (
        <div>
            <Input type="text" placeholder="Type here..." onChangeHanlder={changeHandler} value={props.newItem}
                   name="item"/>
            <button type="button" onClick={addItem}>Add</button>
        </div>
    )
}