import React, { useState } from "react";
import "../../styles/react/Accordion.scss";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items &&
        items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className={`accordion-title ${index === activeIndex ? "active" : ""}`} onClick={() => handleClick(index)}>
              {item.title}
            </div>
            {index === activeIndex && <div className="accordion-content">{item.content}</div>}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
