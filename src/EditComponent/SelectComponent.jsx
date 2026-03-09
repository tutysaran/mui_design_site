// DropdownButton.jsx - Main Component
import React, { useState, useRef, useEffect } from "react";

const DropdownButton = ({
  buttonText = "Custom Theme",
  options = [],
  onSelect,
  width = "200px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(buttonText);
  const dropdownRef = useRef(null);

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option.label);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef} style={{ width }}>
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedValue}</span>
        <span className={`arrow ${isOpen ? "arrow-up" : "arrow-down"}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
