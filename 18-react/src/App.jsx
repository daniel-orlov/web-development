import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import {CreateArea} from "./components/CreateArea";
import {useState} from "react";

function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        // Prevent adding empty notes
        if (note.heading === "" || note.content === "") {
            return;
        }

        setNotes(prevNotes => {
            return [...prevNotes, note]
        })
    }

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            })
        })
    }

    return (<div>
        <Header/>
        <CreateArea onAdd={addNote}></CreateArea>
        {notes.map((note, index) => (<Note
            key={index}
            id={index}
            heading={note.heading}
            content={note.content}
            onDelete={deleteNote}
        />))}
        <Footer/>
    </div>)
}

export default App;