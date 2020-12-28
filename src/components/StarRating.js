import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 3 }) => {
  const [selectedItem, setselectedItem] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          onSelect={() => setselectedItem(i + 1)}
          selected={selectedItem > i}
        />
      ))}
      <p>
        {selectedItem} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
