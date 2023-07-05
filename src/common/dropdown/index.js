import React, { useState } from "react";
import styles from "./index.module.css";

const Dropdown = ({ options, onSelect, label }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      {label ? <div>{label}</div> : null}
      <div className={styles.dropdown}>
        <div
          className={styles.dropdownToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : "Select an option"}
        </div>
        {isOpen && (
          <ul className={styles.dropdownMenu}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.dropdownItem}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
