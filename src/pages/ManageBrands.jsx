import { useRef, useState, useEffect } from "react";
import Table from "../components/Table";

export default function ManageBrands() {
  const fileInputRef = useRef(null);
const [brands, setBrands] = useState([]);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [editingBrand, setEditingBrand] = useState(null); 
const [refreshKey, setRefreshKey] = useState(0);

  const [form, setForm] = useState({
    brandName: "",
    status: "active",
    image: null
  });

  // fetch brands//
useEffect(() => {
    fetch("http://localhost:5000/api/brands")
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(err => console.error(err));
  }, [refreshKey]);
  // -----------------------
  // Handle form input
  // -----------------------
 const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "image") {
      const file = files[0];
      setForm(prev => ({ ...prev, image: file }));
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setForm(prev => ({ ...prev, [id]: value }));
    }
  };


  // -----------------------
  // Validate form
  // -----------------------
  const validate = () => {
    let temp = {};
    if (!form.brandName.trim()) temp.brandName = "Brand Name is required";
    if (!form.status) temp.status = "Status is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };



  // -----------------------
  // Submit form (Add or Update)
  // -----------------------
 const handleSubmit = () => {
  if (!validate()) return;

  setLoading(true);
  setSuccess("");

  const isUpdate = !!editingBrand;
  const url = isUpdate
    ? `http://localhost:5000/api/brands/${editingBrand.id}`
    : "http://localhost:5000/api/brands";
  const method = isUpdate ? "PUT" : "POST";

  // -------- Use FormData --------
 const formData = new FormData();
formData.append("brand_name", form.brandName);
formData.append("status", form.status);

if (form.image) {
  formData.append("image", form.image);
}

fetch(url, {
  method,
  body: formData, 
})

    .then(async (res) => {
      if (!res.ok) {
        const text = await res.text(); // get backend error HTML
        console.error("Backend Error:", text);
        throw new Error("Server Error: " + res.status);
      }
      return res.json();
    })
    .then(() => {
      setSuccess(isUpdate ? "Brand updated successfully!" : "Brand added successfully!");
      setRefreshKey((prev) => prev + 1);
      resetForm();
      setEditingBrand(null);
      setTimeout(() => document.getElementById("closeBtn").click(), 800);
    })
    .catch((err) => {
      console.error("Submit Error:", err);
      alert("Something went wrong! Check console for details.");
    })
    .finally(() => setLoading(false));
};


  // -----------------------
  // Reset form
  // -----------------------
   const resetForm = () => {
    setForm({ brandName: "", status: "active", image: null });
    setPreview(null);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // -----------------------
  // Edit brand
  // -----------------------
 const handleEdit = (brand) => {
  setEditingBrand(brand);
  setForm({
    brandName: brand.brand_name,
    status: brand.status,
  });

  const modal = new window.bootstrap.Modal(
    document.getElementById("addNewModal")
  );
  modal.show();
};



  // -----------------------
  // Delete brand
  // -----------------------
 const handleDelete = async (brand) => {
    if (!window.confirm(`Delete ${brand.brand_name}?`)) return;
    await fetch(`http://localhost:5000/api/brands/${brand.id}`, { method: "DELETE" });
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <h5>Brands</h5>

      {/* Add New Button */}
      <button
        className="btn btn-sm btn-dark"
        style={{ fontSize: "14px" }}
        data-bs-toggle="modal"
        data-bs-target="#addNewModal"
        onClick={() => {
          setEditingBrand(null);
          resetForm();
        }}
      >
        Add New
      </button>

      {/* Add/Edit Modal */}
      <div
        className="modal fade"
        id="addNewModal"
        tabIndex="-1"
        data-bs-backdrop="static"
  data-bs-keyboard="false"
        style={{ fontSize: "14px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">{editingBrand ? "Edit Brand" : "Add New Brand"}</h5>
              <button id="closeBtn" type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {success && <div className="alert alert-success py-1 text-center">{success}</div>}

              <div className="mb-3">
                <label className="form-label">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  className="form-control"
                  value={form.brandName}
                  onChange={handleChange}
                />
                {errors.brandName && <small className="text-danger">{errors.brandName}</small>}
              </div>

             

              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  id="status"
                  className="form-select"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                {errors.status && <small className="text-danger">{errors.status}</small>}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </>
                ) : (
                  editingBrand ? "Update" : "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table with Edit/Delete */}
      <Table
        apiUrl="http://localhost:5000/api/brands"
         refreshKey={refreshKey}
        columns={[
          { key: "brand_name", label: "Brand Name" },
          { key: "created_at", label: "Created At" },
          { key: "updated_at", label: "Updated At" },
          { key: "status", label: "Status", type: "status" },
        ]}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
