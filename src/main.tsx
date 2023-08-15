import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**
 * The root ID is used to make app embeddable
 * TO USE:
 * <div id="root"></div>
 * <script src="/index.js"></script>
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
