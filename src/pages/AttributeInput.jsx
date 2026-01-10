import React, { useState } from "react";

export default function AttributeInput({ attributes = [], onAdd, onRemove }) {
  const [attrName, setAttrName] = useState("");
  const [attrValues, setAttrValues] = useState("");

  const handleAdd = () => {
    if (!attrName || !attrValues) return;

    onAdd({
      id: Date.now(), // frontend only
      name: attrName,
      values: attrValues.split(",").map((v) => v.trim()),
    });

    setAttrName("");
    setAttrValues("");
  };

  return (
    <div>
      <h5>Attribute Name</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="e.g. Color"
        value={attrName}
        onChange={(e) => setAttrName(e.target.value)}
      />

      <h5>Values (Comma Separated)</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="e.g. Red, Blue, Green"
        value={attrValues}
        onChange={(e) => setAttrValues(e.target.value)}
      />

      <button className="btn btn-outline-primary mb-3" onClick={handleAdd}>
        Add Attribute
      </button>

      <div>
        {attributes.map((attr) => (
          <div
            key={attr.id}
            className="border p-2 rounded d-flex justify-content-between mb-2"
          >
            <strong>{attr.name}:</strong> {attr.values.join(", ")}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onRemove(attr.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
