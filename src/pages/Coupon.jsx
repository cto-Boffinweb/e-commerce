import { useEffect, useState } from "react";
import axios from "axios";

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    coupon_name: "",
    coupon_code: "",
    discription: "",
    coupon_discount: "",
    coupon_discount_type: "flat",
    coupon_max_use: "",
    coupon_max_discount: "",
    coupon_expiry: "",
    coupon_type: "web", // web/product/category
    coupon_cats1: "",
    coupon_cats2: "",
    coupon_cats3: "",
    coupon_products: "[]",
    is_hidden: 0,
    is_blocked: 1,
    is_applicable_amount_select: 0,
    applicable_amount: 0
  });

  // Fetch all coupons
  const fetchCoupons = () => {
    axios.get("http://localhost:5000/api/admin/coupons")
      .then(res => setCoupons(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  // Submit Add/Edit
  const handleSubmit = e => {
    e.preventDefault();

    if (editingId) {
      axios.patch(`http://localhost:5000/api/admin/coupons/${editingId}`, form)
        .then(() => {
          setEditingId(null);
          setShowForm(false);
          fetchCoupons();
        });
    } else {
      axios.post("http://localhost:5000/api/admin/coupons", form)
        .then(() => {
          setShowForm(false);
          setForm({ ...form, coupon_products: "[]" });
          fetchCoupons();
        });
    }
  };

  // Delete coupon
  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this coupon?")) {
      axios.delete(`http://localhost:5000/api/admin/coupons/${id}`).then(fetchCoupons);
    }
  };

  // Toggle hidden/blocked
  const toggleStatus = (id, field, value) => {
    axios.patch(`http://localhost:5000/api/admin/coupons/${id}`, { [field]: value === 1 ? 0 : 1 })
      .then(fetchCoupons);
  };

  // Edit coupon
  const handleEdit = c => {
    setEditingId(c.id);
    setForm({ ...c });
    setShowForm(true);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Coupon Management</h3>
        <button className="btn btn-dark" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Coupon"}
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <label>Coupon Name</label>
              <input type="text" className="form-control" required
                value={form.coupon_name}
                onChange={e => setForm({ ...form, coupon_name: e.target.value })} />
            </div>

            <div className="col-md-4">
              <label>Coupon Code</label>
              <input type="text" className="form-control" required
                value={form.coupon_code}
                onChange={e => setForm({ ...form, coupon_code: e.target.value })} />
            </div>

            <div className="col-md-4">
              <label>Discount</label>
              <input type="number" className="form-control" required
                value={form.coupon_discount}
                onChange={e => setForm({ ...form, coupon_discount: e.target.value })} />
            </div>

            <div className="col-md-4 mt-2">
              <label>Discount Type</label>
              <select className="form-control"
                value={form.coupon_discount_type}
                onChange={e => setForm({ ...form, coupon_discount_type: e.target.value })}>
                <option value="flat">Flat</option>
                <option value="percentage">Percentage</option>
              </select>
            </div>

            <div className="col-md-4 mt-2">
              <label>Max Use</label>
              <input type="number" className="form-control"
                value={form.coupon_max_use}
                onChange={e => setForm({ ...form, coupon_max_use: e.target.value })} />
            </div>

            <div className="col-md-4 mt-2">
              <label>Max Discount</label>
              <input type="number" className="form-control"
                value={form.coupon_max_discount}
                onChange={e => setForm({ ...form, coupon_max_discount: e.target.value })} />
            </div>

            <div className="col-md-4 mt-2">
              <label>Expiry Date</label>
              <input type="date" className="form-control"
                value={form.coupon_expiry}
                onChange={e => setForm({ ...form, coupon_expiry: e.target.value })} />
            </div>

            <div className="col-md-4 mt-2">
              <label>Coupon Type</label>
              <select className="form-control"
                value={form.coupon_type}
                onChange={e => setForm({ ...form, coupon_type: e.target.value })}>
                <option value="web">Web Coupon</option>
                <option value="product">Product Coupon</option>
                <option value="category">Category Coupon</option>
              </select>
            </div>

            <div className="col-md-12 mt-2">
              <label>Description</label>
              <textarea className="form-control"
                value={form.discription}
                onChange={e => setForm({ ...form, discription: e.target.value })}></textarea>
            </div>

            <div className="col-md-12 mt-2">
              <label>Applicable Amount?</label>
              <select className="form-control"
                value={form.is_applicable_amount_select}
                onChange={e => setForm({ ...form, is_applicable_amount_select: parseInt(e.target.value) })}>
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
            </div>

            {form.is_applicable_amount_select === 1 && (
              <div className="col-md-4 mt-2">
                <label>Applicable Amount</label>
                <input type="number" className="form-control"
                  value={form.applicable_amount}
                  onChange={e => setForm({ ...form, applicable_amount: e.target.value })} />
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-success mt-3">
            {editingId ? "Update Coupon" : "Add Coupon"}
          </button>
        </form>
      )}

      {/* TABLE */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th><th>Code</th><th>Discount</th><th>Type</th>
            <th>Expiry</th><th>Hidden</th><th>Blocked</th><th>Applicable Amount</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map(c => (
            <tr key={c.id}>
              <td>{c.coupon_name}</td>
              <td>{c.coupon_code}</td>
              <td>{c.coupon_discount}</td>
              <td>{c.coupon_discount_type}</td>
              <td>{c.coupon_expiry}</td>
              <td>
                <button
                  className={`btn btn-sm ${c.is_hidden ? "btn-danger" : "btn-success"}`}
                  onClick={() => toggleStatus(c.id, "is_hidden", c.is_hidden)}>
                  {c.is_hidden ? "Hidden" : "Visible"}
                </button>
              </td>
              <td>
                <button
                  className={`btn btn-sm ${c.is_blocked ? "btn-danger" : "btn-success"}`}
                  onClick={() => toggleStatus(c.id, "is_blocked", c.is_blocked)}>
                  {c.is_blocked ? "Blocked" : "Active"}
                </button>
              </td>
              <td>{c.is_applicable_amount_select ? c.applicable_amount : "N/A"}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => handleEdit(c)}>Edit</button>
                <button className="btn btn-danger btn-sm ml-1" onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
