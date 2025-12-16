import React, { useState } from "react";
import { validate } from "../components/Validation";
import { FaScissors } from "react-icons/fa6";
export default function Coupon() {
  const [errors, setErrors] = useState({});

  const couponRules = {
  name: { required: true, min: 3 },
  code: { required: true, min: 3 },
  amount: { required: true },
  expiry: { required: true },

  minSubtotalAmount: {
    required: (values) => values.minSubtotalRequired === "yes"
  },

  category: {
    required: (values) => values.applyOn === "category"
  },

  product: {
    required: (values) => values.applyOn === "product"
  }
};


  const [coupon, setCoupon] = useState({
  name: "",
  code: "",
  type: "fixed",
  amount: "",
  expiry: "",
  minSubtotalRequired: "no",
  minSubtotalAmount: "",
  applyOn: "all",
  category: "",
  product: "",
  maxUsage: "",
  status: "active",
  description: "",
  image: null,
  imagePreview: null   
});

  const [coupons, setCoupons] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
  const file = e.target.files[0];
  setCoupon(prev => ({
    ...prev,
    image: file,
    imagePreview: URL.createObjectURL(file)
  }));
};

  const handleAddCoupon = () => {
  const validationErrors = validate(coupon, couponRules);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setCoupons([...coupons, coupon]);

  setCoupon({
    name: "",
    code: "",
    type: "fixed",
    amount: "",
    expiry: "",
    minSubtotalRequired: "no",
    minSubtotalAmount: "",
    applyOn: "all",
    category: "",
    product: "",
    maxUsage: "",
    status: "active",
    description: "",
    image: null,
      imagePreview: null   

  });

  setErrors({});
};
const handleDelete = (index) => {
  setCoupons(coupons.filter((_, i) => i !== index));
};


  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-3">Coupon Management</h2>

      <div className="row">
        {/* LEFT SIDE — Coupon Form */}
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">

            {/* ROW 1 */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Coupon Name</label>
<input
  name="name"
  value={coupon.name}
  onChange={handleChange}
  className="form-control"
/>
{errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="col-md-4">
                <label>Coupon Code</label>
                <input name="code" value={coupon.code} onChange={handleChange} className="form-control" />
                {errors.code && <small className="text-danger">{errors.code}</small>}

              </div>

              <div className="col-md-4">
                <label>Expiry Date</label>
                <input type="date" name="expiry" value={coupon.expiry} onChange={handleChange} className="form-control" />
                {errors.expiry && <small className="text-danger">{errors.expiry}</small>}

              </div>
            </div>

            {/* ROW 2 */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Discount Type</label>
                <select name="type" value={coupon.type} onChange={handleChange} className="form-control">
                  <option value="fixed">Fixed Amount</option>
                  <option value="percent">Percentage</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>Discount Amount</label>
                <input name="amount" value={coupon.amount} onChange={handleChange} className="form-control" />
              {errors.amount && <small className="text-danger">{errors.amount}</small>}

              </div>

              <div className="col-md-4">
                <label>Status</label>
                <select name="status" value={coupon.status} onChange={handleChange} className="form-control">
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>
            </div>

            {/* ROW 3 – MIN CART SUBTOTAL */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Min Cart Required?</label>
                <select name="minSubtotalRequired" value={coupon.minSubtotalRequired} onChange={handleChange} className="form-control">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {coupon.minSubtotalRequired === "yes" && (
                <div className="col-md-4">
                  <label>Min Subtotal Amount</label>
                  <input name="minSubtotalAmount" value={coupon.minSubtotalAmount} onChange={handleChange} className="form-control" />
                </div>
              )}
            </div>

            {/* APPLY ON CATEGORY / PRODUCT */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Apply On</label>
                <select name="applyOn" value={coupon.applyOn} onChange={handleChange} className="form-control">
                  <option value="all">All Products</option>
                  <option value="category">Specific Category</option>
                  <option value="product">Specific Product</option>
                </select>
              </div>

              {coupon.applyOn === "category" && (
                <div className="col-md-4">
                  <label>Category</label>
                  <input name="category" value={coupon.category} onChange={handleChange} className="form-control" />
                </div>
              )}

              {coupon.applyOn === "product" && (
                <div className="col-md-4">
                  <label>Product</label>
                  <input name="product" value={coupon.product} onChange={handleChange} className="form-control" />
                </div>
              )}
            </div>

            {/* ROW 4 */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Max Usage Limit</label>
                <input name="maxUsage" value={coupon.maxUsage} onChange={handleChange} className="form-control" />
              </div>

              <div className="col-md-4">
                <label>Coupon Image</label>
                <input type="file" onChange={handleImage} className="form-control" />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-3">
              <label>Coupon Description</label>
              <textarea
                name="description"
                value={coupon.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>
              
           <button
  type="button"
  className="btn btn-primary mt-3 w-100"
  onClick={handleAddCoupon}
>
  Add Coupon
</button>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Coupon Preview */}
<div className="col-md-6 p-0" style={{fontSize:'13px'}}>
  <div className="row m-0">
        <div className="col-md-8">
          <h6 className="text-center mb-2">Coupon Preview</h6>

          <div
            className="p-2 shadow-sm"
            style={{
              border: "2px dashed #7b7b7b",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fffdf5, #f8f2da)",
              position: "relative",
            }}
          >
            <FaScissors  style={{ position: "absolute", left: -8, top: 10, transform: "rotate(90deg)" }} />
                        <h6 className="text-center">{coupon.name || "Coupon Name"}</h6>

              <div className="d-flex justify-content-center align-items-center">
{coupon.imagePreview && (
  <img
    src={coupon.imagePreview}
    alt="Coupon"
    style={{
      width: "20%",
      height: "20%",
      objectFit: "cover",
      borderRadius: "50%"
    }}
  />
)}


            <h6 className="text-center" style={{ fontWeight: "bold", color: "#d9534f" }}>
              {coupon.type === "percent" ? `${coupon.amount}% OFF` : `₹${coupon.amount} OFF`}
            </h6>


            <div className="text-center mx-2">
              <div
                style={{
                  border: "1px dashed #d9534f",
                  // padding: "8px 12px",
                  display: "flex",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  color: "#d9534f"
                }}
              >
                {coupon.code || "COUPON2025"}
              </div>
            </div></div>

            <p >
              <b>Expires:</b> {coupon.expiry || "—"}
            </p>

<p
  style={{
    maxHeight: "60px",
    overflowY: "auto",
    wordBreak: "break-word"
  }}
>
  {coupon.description || "Coupon description will appear here."}
</p>

            {coupon.minSubtotalRequired === "yes" && (
              <p><b>Min Cart:</b> ₹{coupon.minSubtotalAmount}</p>
            )}

            {coupon.applyOn === "category" && <p><b>Category:</b> {coupon.category}</p>}
            {coupon.applyOn === "product" && <p><b>Product:</b> {coupon.product}</p>}

            <p><b>Status:</b> {coupon.status}</p>
          </div>
        </div>
       <div className="col-md-4 "> <h5 >All Coupons</h5>

{coupons.map((c, index) => (
  <div
    key={index}
    className="border p-2 mb-2 rounded d-flex justify-content-between align-items-start"
  >
    <div>
      <b>{c.name}</b> ({c.code})
      <div>
        {c.type === "percent" ? `${c.amount}% OFF` : `₹${c.amount} OFF`}
      </div>
      <small>Status: {c.status}</small>
    </div>

    <button
      className="btn btn-sm btn-danger"
      onClick={() => handleDelete(index)}
    >
      Delete
    </button>
  </div>
))}

</div>
</div></div>
      </div>
    </div>
  );
}
