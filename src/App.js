import "./App.css";
import React, { useRef } from "react";

function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (evt) => {
    evt.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert("soundVal and ColorVal" + soundVal + colorVal);
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder="Sound color" />
      <input ref={color} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
