import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [sound, setSound] = useState("");
  const [color, setcolor] = useState("#000");

  const submit = (evt) => {
    evt.preventDefault();

    alert("soundVal and ColorVal" + sound + color);
    setSound("");
    setcolor("#000");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        type="text"
        onChange={(e) => setSound(e.target.value)}
        placeholder="Sound color"
      />
      <input
        value={color}
        type="color"
        onChange={(e) => setcolor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
