export function TodoItem(props) {
    return (
        <div onClick={() => props.onClick(props.id)}>
            <li>{props.text}</li>
        </div>
    )
}