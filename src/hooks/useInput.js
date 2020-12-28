import { useState } from "react";

export default function useInput(initValue) {
  const [val, setVal] = useState(initValue);
  return [
    { val, onChange: (e) => setVal(e.target.value) },
    () => setVal(initValue),
  ];
}
