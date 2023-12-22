import React, { useState, useRef } from "react";
// @ts-ignore
import arrow_down from "../assets/arrow_down.png";
// @ts-ignore
import arrow_up from "../assets/arrow_up.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapseContainer">
      <div
        onClick={handleToggleCollapse}
        className={`collapse ${isOpen ? "open" : ""}`}
      >
        <p>{title}</p>
        <img
          src={isOpen ? arrow_down : arrow_up}
          alt={isOpen ? "fermer" : "ouvrir"}
        />
      </div>
      {isOpen && (
        <div ref={contentRef} className="collapsibleContent">
          <ul>{content}</ul>
        </div>
      )}
    </div>
  );
}
