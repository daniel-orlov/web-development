import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Note heading={"This is a note heading"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores blanditiis consequatur dolor doloribus, ducimus excepturi, fugiat id impedit inventore laudantium molestias nemo numquam pariatur, porro quibusdam quod veniam."}/>
            <Footer/>
        </div>
    )
}

export default App;