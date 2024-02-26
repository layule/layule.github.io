import React, { useState } from "react";

const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Card;
