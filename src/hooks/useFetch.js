import { useState, useEffect } from "react";

export function usefetch(uri) {
  const [data, setdata] = useState();
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    if (!uri) return;

    fetch(uri)
      .then((data) => data.json())
      .then(setdata)
      .then(() => setloading(false))
      .catch(seterror);
  }, [uri]);

  return { loading, data, error };
}
