import React from "react";
import Select from "react-select";

const SingleSelectDropdown = ({ value, onChange, usedOptions }) => {
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
    { value: "Option 5", label: "Option 5" },
    { value: "Option 6", label: "Option 6" },
    { value: "Option 7", label: "Option 7" },
    { value: "Option 8", label: "Option 8" }
    
  ].filter(option => !usedOptions.includes(option.value));

  return (
    <Select
      options={options}
      value={options.find(option => option.value === value)}
      onChange={(selected) => onChange(selected?.value || "")}
      placeholder="Select an option"
    />
  );
};

export default SingleSelectDropdown;
