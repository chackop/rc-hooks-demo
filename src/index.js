import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const [firstItem, secondPiece] = ["chax1", "chax2", "chax3"];
// const [, , thirdPiece] = ["chax1", "chax2", "chax3"];
// console.log("firstItem", firstItem);
// console.log("secondPiece", secondPiece);
// console.log("thirdPiece", thirdPiece);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
