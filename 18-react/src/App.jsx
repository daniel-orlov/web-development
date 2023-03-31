import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import {InputArea} from "./components/InputArea";
import {useState} from "react";

function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        console.log("note:")
        console.log(note)
        setNotes(prevNotes => {
            return [...prevNotes, note]
        })
    }

    return (<div>
        <Header/>
        <InputArea onAdd={addNote}></InputArea>
        {notes.map(note => (<Note
            key={note.id}
            heading={note.heading}
            content={note.content}
        />))}
        <Footer/>
    </div>)
}

export default App;