import React from "react";
import LinkedProducts from "./LinkedProducts";

export default function ProductData({
  formValues,
  setFormValues,
  errors,
  setErrors,
  validate,

  handleAddAttribute,
  handleRemoveAttribute,

  generateVariations,
  variations,
  variationPrices,
  variationStocks,
  handleVariationPriceChange,
  handleVariationStockChange
}) {



  return (
    <div className="container " style={{ color: 'grey', fontSize: '14px' }}>
      <div className="row ">

        {/* LEFT SIDE  Tabs */}
        <div className="card p-0">
          <div className="card-header ">
            <h5>Product data</h5>
            {/* Tabs nav */}
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item">
                <a href="#shipping" className="nav-link active" data-bs-toggle="tab">Shipping</a>
              </li>
              <li className="nav-item">
                <a href="#linked" className="nav-link" data-bs-toggle="tab">Linked products</a>
              </li>
              <li className="nav-item">
                <a href="#attributes" className="nav-link" data-bs-toggle="tab">Attributes</a>
              </li>
              <li className="nav-item">
                <a href="#variations" className="nav-link" data-bs-toggle="tab">Variations</a>
              </li>
              <li className="nav-item">
                <a href="#general" className="nav-link" data-bs-toggle="tab">General</a>
              </li>
            </ul>
          </div>

          <div className="card-body tab-content">
            <div className="tab-pane fade show active" id="shipping">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                      <label>Weight (kg)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formValues.weight || ""}
                        onChange={(e) => setFormValues({ ...formValues, weight: e.target.value })}
                      />
                      {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                      <label>Length (cm)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formValues.length || ""}
                        onChange={(e) => setFormValues({ ...formValues, length: e.target.value })}
                      />
                      {errors.length && <p style={{ color: "red" }}>{errors.length}</p>}
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                      <label>Width (cm)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formValues.width || ""}
                        onChange={(e) => setFormValues({ ...formValues, width: e.target.value })}
                      />
                      {errors.width && <p style={{ color: "red" }}>{errors.width}</p>}
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                      <label>Height (cm)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formValues.height || ""}
                        onChange={(e) => setFormValues({ ...formValues, height: e.target.value })}
                      />
                      {errors.height && <p style={{ color: "red" }}>{errors.height}</p>}
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className="tab-pane fade text-secondary" id="linked">
              <h5 className="mt-2">Upsells (products IDs)</h5>
              <LinkedProducts formValues={formValues} setFormValues={setFormValues} />
            </div>



            {/* attributes */}
            {/* Attributes tab */}
            <div className="tab-pane fade text-secondary" id="attributes">
              <h5>Attributes name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Color"
                value={formValues.attrName}
                onChange={(e) =>
                  setFormValues({ ...formValues, attrName: e.target.value })
                }
              />
              {errors.attrName && <p style={{ color: "red" }}>{errors.attrName}</p>}

              <h5 className="my-2">Values (Comma Separated)</h5>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Red,Blue,Green"
                value={formValues.attrValues}
                onChange={(e) =>
                  setFormValues({ ...formValues, attrValues: e.target.value })
                }
              />
              {errors.attrValues && <p style={{ color: "red" }}>{errors.attrValues}</p>}

              <button
                className="btn btn-outline-primary my-2"
                onClick={() => handleAddAttribute()}
              >
                Add Attribute
              </button>

              {/* Render added attributes with Remove button */}
              <div className="my-2">
                {formValues.attributes.map((attr) => (

                  <div key={attr.id} className="border p-2 mb-2 rounded">
                    <strong>{attr.name}:</strong> {attr.values.join(", ")}
                    <button
                      className="btn btn-sm btn-danger float-end "
                      onClick={() => handleRemoveAttribute(attr.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* variations */}
            <div className="tab-pane fade text-secondary" id="variations">
              <p className="mt-2">Generates variations from attributes. (Click to generate table)</p>

              <button
                className="btn btn-outline-primary mb-2"
                onClick={() => generateVariations()}
              >
                Generate Variations
              </button>

              {variations.length > 0 && (
                <table className="table table-md table-bordered text-center">
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
                      <tr key={idx}>
                        <td>{v.join(" / ")}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={variationPrices.mrp[idx] || ""}
                            onChange={(e) =>
                              handleVariationPriceChange("mrp", idx, e.target.value)
                            }
                          /></td>
<td><input type="text" className="form-control form-control-sm"/></td>
<td><input type="text" className="form-control form-control-sm"/></td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={variationPrices.sell[idx] || ""}
                            onChange={(e) =>
                              handleVariationPriceChange("sell", idx, e.target.value)
                            }
                          />

                        </td>

                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={variationStocks[idx] || ""}
                            onChange={(e) => handleVariationStockChange(idx, e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="tab-pane fade text-secondary" id="general">
              <form>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Product Code</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formValues.productCode || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, productCode: e.target.value })
                      }
                    />
                    {errors.productCode && <p style={{ color: "red" }}>{errors.productCode}</p>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>SKU</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formValues.sku || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, sku: e.target.value })
                      }
                    />
                    {errors.sku && <p style={{ color: "red" }}>{errors.sku}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Manage Stock?</label>
                    <select
                      className="form-control"
                      value={formValues.manageStock || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, manageStock: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.manageStock && <p style={{ color: "red" }}>{errors.manageStock}</p>}

                  </div>


                  <div className="col-md-6 mb-3">
                    <label>Stock Quantity?</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formValues.stockQty || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, stockQty: e.target.value })
                      }
                    />
                    {errors.stockQty && <p style={{ color: "red" }}>{errors.stockQty}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Is Delivery Charge?</label><br />

                    <select
                      className="form-control"
                      value={formValues.isDeliveryCharge || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, isDeliveryCharge: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.isDeliveryCharge && <p style={{ color: "red" }}>{errors.isDeliveryCharge}</p>}


                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Delivery charge</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formValues.deliveryCharge || ""}
                      onChange={(e) =>
                        setFormValues({ ...formValues, deliveryCharge: e.target.value })
                      }
                    />
                    {errors.deliveryCharge && <p style={{ color: "red" }}>{errors.deliveryCharge}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
      
      .nav-tabs .nav-link {
  color: grey !important;
  text-decoration: none !important;

}  
        .nav-tabs .nav-link.active {
  color: black !important;
    text-decoration: none !important;

}
    .nav-tabs .nav-link:hover{
      color: black !important;

    }
        `}
      </style>
    </div>
  );
}
