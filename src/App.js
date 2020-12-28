import "./App.css";
import React, { useState, useEffect, useReducer } from "react";

function App() {
  const [num, setNum] = useReducer((num, newnum) => num + newnum, 0);

  return <h1 onClick={() => setNum(1)}>{num}</h1>;
}

export default App;
