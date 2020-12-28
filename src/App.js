import "./App.css";
import React, { useContext } from "react";
import { useSpecies } from "./";

function App() {
  const { species } = useSpecies();
  return (
    <div>
      <h1>Species</h1>
      <ul>
        {species.map((item) => (
          <li key={item.id}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
