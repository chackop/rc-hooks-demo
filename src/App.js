import "./App.css";
import React, { useRef, useState } from "react";
import useInput from "./hooks/useInput";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetcolor] = useInput("#000");

  const submit = (evt) => {
    evt.preventDefault();

    alert("soundVal and ColorVal" + titleProps.value + colorProps.value);
    resetTitle();
    resetcolor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Sound color" />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
