import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {App} from "../App";
import {Login} from "../components/Login";
import {TodoList} from "../components/TodoList";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
            <ComponentPreview path="/TodoList">
                <TodoList/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews