import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import {HeroesApp} from '../src/HeroesApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <HeroesApp/>
        </BrowserRouter>
    </React.StrictMode>,
)