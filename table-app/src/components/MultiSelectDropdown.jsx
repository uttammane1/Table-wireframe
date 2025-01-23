import React, { useState } from "react";
import Select, { components } from "react-select";

const MultiSelectDropdown = ({ value, onChange }) => {
  const [options, setOptions] = useState([
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" }
  ]);
  const [inputValue, setInputValue] = useState("");

  // Handle new input from the user
  const handleInputChange = (input) => {
    setInputValue(input);
  };

  // Handle adding a new option when the user clicks on the "Add New" option
  const handleCreateNewOption = () => {
    if (inputValue.trim()) {
      const newOption = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions((prevOptions) => [...prevOptions, newOption]);
      onChange([...value, newOption]); // Automatically select the new option
      setInputValue(""); // Clear the input value
    }
  };

  // Custom component to render the "Add New" option
  const CustomMenu = (props) => {
    const { children, selectProps } = props;
    return (
      <components.Menu {...props}>
        {children}
        {selectProps.inputValue && (
          <div
            style={{
              padding: "10px",
              cursor: "pointer",
              color: "#4CAF50",
              borderTop: "1px solid #ddd",
            }}
            onClick={handleCreateNewOption}
          >
            + Add "{selectProps.inputValue}"
          </div>
        )}
      </components.Menu>
    );
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      isMulti
      placeholder="Select or type to add..."
      components={{ Menu: CustomMenu }}
    />
  );
};

export default MultiSelectDropdown;
