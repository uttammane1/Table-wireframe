import React from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Row = ({ row, onRowChange, usedSingleOptions }) => {
  return (
    <tr>
      <td>
        <SingleSelectDropdown
          value={row.singleSelect}
          onChange={(value) => onRowChange(row.id, "singleSelect", value)}
          usedOptions={usedSingleOptions}
        />
      </td>
      <td>
        <MultiSelectDropdown
          value={row.multiSelect}
          onChange={(value) => onRowChange(row.id, "multiSelect", value)}
        />
      </td>
    </tr>
  );
};

export default Row;
