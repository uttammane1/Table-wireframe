import React, { useState } from "react";
import Row from "./Row";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelect: "", multiSelect: [] }]);
  const [usedSingleOptions, setUsedSingleOptions] = useState([]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, singleSelect: "", multiSelect: [] };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleRowChange = (id, field, value) => {
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);

    if (field === "singleSelect") {
      setUsedSingleOptions(updatedRows.map(row => row.singleSelect).filter(Boolean));
    }
  };

  return (
    <div className="container">
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <Row
              key={row.id}
              row={row}
              onRowChange={handleRowChange}
              usedSingleOptions={usedSingleOptions}
            />
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button className="add-row-btn" onClick={addRow}>Add New Row</button>
        <button className="delete-row-btn" onClick={() => deleteRow(rows.length)}>Delete Last Row</button>
      </div>
    </div>
  );
};

export default Table;
