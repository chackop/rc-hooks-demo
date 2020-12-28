import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const SpeciesContext = createContext();

const species = [
  { id: "1", type: "animal" },
  { id: "2", type: "insects" },
  { id: "3", type: "plants" },
  { id: "4", type: "minerals" },
];

ReactDOM.render(
  <SpeciesContext.Provider value={{ species }}>
    <App />
  </SpeciesContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
