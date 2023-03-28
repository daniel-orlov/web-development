import Heading from "./components/Heading";
import List from "./components/List";
import BorderedText from "./components/BorderedText";

function App() {
    return (
        <div>
            <Heading/>
            <List/>
            <img className="rounded-square image" src="react.png" alt="react logo"/>
            <BorderedText/>
        </div>
    )
}

export default App;