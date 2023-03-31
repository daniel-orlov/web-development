function Note(props) {
    return (<div>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
    </div>)
}

export default Note;