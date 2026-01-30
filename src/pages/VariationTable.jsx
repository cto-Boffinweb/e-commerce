import React from "react";

export default function VariationTable({
  attributes = [],
  variations = [],
  variationData = [], // [{ sku, productCode, mrp, sell, stock }]
  setVariationData,
  generateVariations,
}) {


  // Handle field changes for a specific variation
  const handleChange = (idx, field, value) => {
    const newData = [...variationData];
    newData[idx][field] = value;
    setVariationData(newData);
  };

  return (
    <div>
      <p className="mt-2">Generate variations from attributes:</p>
   <button
  className="btn btn-outline-primary mb-2"
  disabled={!attributes || attributes.length === 0}
  onClick={generateVariations} 
>
  Generate Variations
</button>


    {console.log("Variations length:", variations.length, "Variations:", variations)}


      {variations.length > 0 && (
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Variation</th>
              <th>SKU</th>
              <th>Product Code</th>
              <th>MRP</th>
              <th>Sell Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {variations.map((v, idx) => (
<tr key={variationData[idx]?.variationSKU || idx}>
                <td>{v.join(" / ")}</td>
              <td>
  <input
    type="text"
    className="form-control form-control-sm"
    value={variationData[idx]?.variationSKU || ""}
    readOnly
  />
</td>
<td>
  <input
    type="text"
    className="form-control form-control-sm"
    value={variationData[idx]?.variationCode || ""}
    readOnly
  />
</td>


                <td>
                 <input
  type="number"
  className="form-control form-control-sm"
  value={variationData[idx]?.mrp || ""}
  onChange={(e) => handleChange(idx, "mrp", e.target.value)}
/>

                </td>
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={variationData[idx]?.sell || ""}
                    onChange={(e) => handleChange(idx, "sell", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={variationData[idx]?.stock || ""}
                    onChange={(e) => handleChange(idx, "stock", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
