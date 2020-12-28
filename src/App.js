import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("Init Status");
  return (
    <div className="App">
      <h1>Result is {result}</h1>
      <button onClick={() => setResult("setting status")}>
        {" "}
        Change result
      </button>
    </div>
  );
}

export default App;
