import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

export function App() {
    const name = "Dan";

    return (<>
            <Header name={name}/>
            <Main/>
            <Footer name={name} year={getYear()}/>
        </>)
}

function getYear() {
    return new Date().getFullYear();
}