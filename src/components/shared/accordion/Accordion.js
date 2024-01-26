import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

import data from "./data.json";
import "./styles.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);


//   To navigate to a different place
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.title}
          answer={item.description}
          index={index}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)
          }
        />
      ))}
    </div>
  );
};

export default Accordion;
