import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {About, Contact, History, Home} from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}>
                    <Route path="history" element={<History/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </BrowserRouter>
    </DevSupport>
</React.StrictMode>);

