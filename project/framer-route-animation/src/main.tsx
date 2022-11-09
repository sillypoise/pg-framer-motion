import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/tailwind.css";
import { BrowserRouter, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <nav>
                <ul role="list" className="cluster">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/a">A</Link>
                    </li>
                    <li>
                        <Link to="/b">B</Link>
                    </li>
                </ul>
            </nav>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
