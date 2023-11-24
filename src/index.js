import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./style.css";

// grab div, where rendering happens
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
