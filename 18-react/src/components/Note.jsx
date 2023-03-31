function Note(props) {
    return (<div className="note">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <button onClick={() => (props.onDelete(props.id))}>DELETE</button>
    </div>)
}

export default Note;