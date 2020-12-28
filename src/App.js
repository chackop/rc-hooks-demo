import "./App.css";
import React from "react";
import { usefetch } from "./hooks/useFetch";

function App({ login }) {
  const { loading, data, error } = usefetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) {
    return <h1>loading</h1>;
  } else if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default App;
