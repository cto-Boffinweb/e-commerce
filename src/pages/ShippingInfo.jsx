import React from "react";

export default function ShippingInfo({ formValues, setFormValues, errors = {} }) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <label>Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            value={formValues.weight || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, weight: e.target.value })
            }
          />
          {errors.weight && (
            <p className="text-danger">{errors.weight}</p>
          )}
        </div>

        <div className="col-12 col-md-3 mb-3">
          <label>Length (cm)</label>
          <input
            type="number"
            className="form-control"
            value={formValues.length || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, length: e.target.value })
            }
          />
          {errors.length && (
            <p className="text-danger">{errors.length}</p>
          )}
        </div>

        <div className="col-12 col-md-3 mb-3">
          <label>Width (cm)</label>
          <input
            type="number"
            className="form-control"
            value={formValues.width || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, width: e.target.value })
            }
          />
          {errors.width && (
            <p className="text-danger">{errors.width}</p>
          )}
        </div>

        <div className="col-12 col-md-3 mb-3">
          <label>Height (cm)</label>
          <input
            type="number"
            className="form-control"
            value={formValues.height || ""}
            onChange={(e) =>
              setFormValues({ ...formValues, height: e.target.value })
            }
          />
          {errors.height && (
            <p className="text-danger">{errors.height}</p>
          )}
        </div>
      </div>
    </>
  );
}
