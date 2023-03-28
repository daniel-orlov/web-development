import Heading from "./Heading";
import List from "./List";
import BorderedText from "./BorderedText";

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