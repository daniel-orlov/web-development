function Note(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>

    )
}

export function newNote(note) {
    return <Note
        key={note.id}
        heading={note.heading}
        content={note.content}
    />
}

export default Note;