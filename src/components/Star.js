import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "blue"} onClick={onSelect} />;
};

export default Star;
