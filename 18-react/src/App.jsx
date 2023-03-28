import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores blanditiis consequatur dolor doloribus, ducimus excepturi, fugiat id impedit inventore laudantium molestias nemo numquam pariatur, porro quibusdam quod veniam."

const notes = [
    {id: "1", heading: "The first note", content: lorem},
    {id: "2", heading: "The second note", content: lorem},
    {id: "3", heading: "The third note", content: lorem},
    {id: "4", heading: "The fourth note", content: lorem},
]

function App() {
    return (
        <div>
            <Header/>
            {notes.map(note => (
                <Note
                    key={note.id}
                    heading={note.heading}
                    content={note.content}
                />
            ))}
            <Footer/>
        </div>
    )
}

export default App;