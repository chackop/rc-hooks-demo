import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("initialState");
  const [Admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = "Title" + name;
  }, [name]);

  useEffect(() => {
    console.log(`Admin user ${Admin ? "IS admin" : "not admin"}`);
  }, [Admin]);

  return (
    <section>
      <p>Congos {name}</p>
      <button onClick={() => setName("AnotherSTate")}>Change name</button>
      <p>Admin {Admin ? "admin login" : "no admins"}</p>
      <button onClick={() => setAdmin(true)}>set admin</button>
    </section>
  );
}

export default App;
