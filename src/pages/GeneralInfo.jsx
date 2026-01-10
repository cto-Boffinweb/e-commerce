export default function GeneralInfo({ formValues, setFormValues, errors = {} }) {
  return (
    <>
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
          {errors.productCode && (
            <p className="text-danger">{errors.productCode}</p>
          )}
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
          {errors.sku && <p className="text-danger">{errors.sku}</p>}
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
        </div>

        <div className="col-md-6 mb-3">
          <label>Stock Quantity</label>
          <input
            type="number"
            className="form-control"
            value={formValues.stockQty || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, stockQty: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Is Delivery Charge?</label>
          <select
            className="form-control"
            value={formValues.isDeliveryCharge || ""}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                isDeliveryCharge: e.target.value,
              })
            }
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label>Delivery Charge</label>
          <input
            type="number"
            className="form-control"
            value={formValues.deliveryCharge || ""}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                deliveryCharge: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
}
