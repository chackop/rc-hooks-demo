import "./App.css";
import React, { useReducer } from "react";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={() => toggle()} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default App;
