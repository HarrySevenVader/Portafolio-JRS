import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Example from "./Example";
import "./styles/global.css";
import "./styles/sections.css";
import "./styles/responsive.css";
// import ProjectsBackground from "./ProjectsBackground";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
