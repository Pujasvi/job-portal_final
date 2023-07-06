import React, { useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

const MultiSelectDropdown = ({ options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOptionClick = (event) => {
    event.stopPropagation();
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.multiSelectDropdown} onClick={handleDropdownClick}>
      <div className={styles.dropdownToggle}>
        {selectedOptions?.length > 0
          ? selectedOptions.map((option) => option.label).join(", ")
          : "Select options"}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu} onClick={handleOptionClick}>
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx(
                styles.dropdownItem,
                selectedOptions.includes(option)
                  ? styles.dropdownItemSelected
                  : ""
              )}
              onClick={() => toggleOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
