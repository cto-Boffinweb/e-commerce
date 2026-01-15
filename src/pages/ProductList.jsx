import { useRef, useState, useEffect } from "react";
import Table from "../components/Table";

export default function ProductList() {
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [editingProduct, setEditingProduct] = useState(null); 
const [refreshKey, setRefreshKey] = useState(0);

 const [form, setForm] = useState({
  product_name: "",
  categories: "",
  subcategories: "",
  brands: "",
  type: "",
  product_attributes: {},
  manage_stock: 0,
  stock_qty: 0,
  status: "active",
  main_image: null
});

  // -----------------------
  // Handle form input
  // -----------------------
  const handleChange = (e) => {
    const { id, value, files } = e.target;

   if (id === "main_image") {
  const file = files[0];
  setForm((prev) => ({ ...prev, main_image: file }));
  if (file) setPreview(URL.createObjectURL(file));
} else {
  setForm((prev) => ({ ...prev, [id]: value }));
}

  };

  // -----------------------
  // Validate form
  // -----------------------
 // Validate function
const validate = () => {
  let temp = {};
  if (!form.product_name.trim()) temp.product_name = "Product Name is required";
if (!editingProduct && !form.categories)
  temp.categories = "Category is required";
  if (!editingProduct && !form.main_image) temp.main_image = "Thumbnail image is required";
  if (form.main_image && !form.main_image.type.startsWith("image/"))
    temp.main_image = "Only image files allowed";
if (form.status === undefined || form.status === null)
  temp.status = "Status is required";

  setErrors(temp);
  return Object.keys(temp).length === 0;
};



  // -----------------------
  // Submit form (Add or Update)
  // -----------------------
  const handleSubmit = () => {
    console.log("FORM DATA =>", form);

    if (!validate()) return;

    setLoading(true);
    setSuccess("");
setRefreshKey(prev => prev + 1);

    const isUpdate = !!editingProduct;

   const formData = new FormData();
formData.append("product_name", form.product_name);
formData.append("categories", form.categories);
formData.append("status", form.status);
if (form.main_image) formData.append("main_image", form.main_image);
if (form.product_attributes)
  formData.append("product_attributes", JSON.stringify(form.product_attributes));

const url = isUpdate
  ? `http://localhost:5000/api/admin/productlist/${editingProduct.id}`
  : "http://localhost:5000/api/admin/productlist";
const method = isUpdate ? "PUT" : "POST";

    fetch(url, { method, body: formData })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSuccess(isUpdate ? "Product updated successfully!" : "Product added successfully!");
        resetForm();
        setTimeout(() => {
          document.getElementById("closeBtn").click();
          setSuccess("");
          setEditingProduct(null);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // -----------------------
  // Reset form
  // -----------------------
 const resetForm = () => {
  setForm({
    product_name: "",
    categories: "",
    subcategories: "",
    brands: "",
    type: "",
    product_attributes: {},
    manage_stock: 0,
    stock_qty: 0,
    status: "active",
    main_image: null
  });
  setPreview(null);
  setErrors({});
  if (fileInputRef.current) fileInputRef.current.value = "";
};


  // -----------------------
  // Edit Product
  // -----------------------
 const handleEdit = (product) => {
  setEditingProduct(product);

  const normalizedStatus =
    product.status === 1 || product.status === "1"
      ? "active"
      : "inactive";

  setForm({
  product_name: product.product_name || "",
  categories: product.categories ? String(product.categories) : "", // ✅
  brands: product.brands || "",
  status: normalizedStatus,
  product_attributes:
    typeof product.product_attributes === "string"
      ? JSON.parse(product.product_attributes)
      : product.product_attributes || {},
  main_image: null,
});


  setPreview(
    product.main_image
      ? `http://localhost:5000/${product.main_image}`
      : null
  );

  const modal = new window.bootstrap.Modal(
    document.getElementById("addNewModal")
  );
  modal.show();
};




  // -----------------------
  // Delete Product
  // -----------------------
 const handleDelete = (product) => {
  if (!window.confirm(`Are you sure you want to delete ${product.product_name}?`)) return;

  fetch(`http://localhost:5000/api/admin/productlist/${product.id}`, { method: "DELETE" })
    .then(() => {
      alert(`${product.product_name} deleted!`);
      setRefreshKey(prev => prev + 1); 
    })
    .catch((err) => console.log(err));
};



  return (
    <div>
      <h5>Products</h5>

      {/* Add New Button */}
      <button
        className="btn btn-sm btn-dark"
        style={{ fontSize: "14px" }}
        data-bs-toggle="modal"
        data-bs-target="#addNewModal"
        onClick={() => {
          setEditingProduct(null);
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
              <h5 className="modal-title">{editingProduct ? "Edit Product" : "Add New Product"}</h5>
              <button id="closeBtn" type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {success && <div className="alert alert-success py-1 text-center">{success}</div>}

              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                 id="product_name"
value={form.product_name}
                  className="form-control"
                  onChange={handleChange}
                />
{errors.product_name && <small className="text-danger">{errors.product_name}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Thumbnail:</label>
                <input
                  type="file"
id="main_image"
                  className="form-control"
                  onChange={handleChange}
                  ref={fileInputRef}
                />
{errors.main_image && <small className="text-danger">{errors.main_image}</small>}
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ width: "80px", marginTop: "10px", borderRadius: "4px" }}
                  />
                )}
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
                  editingProduct ? "Update" : "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table with Edit/Delete */}
      <Table
        apiUrl="http://localhost:5000/api/admin/productlist"
         refreshKey={refreshKey}
       columns={[
  { key: "id", label: "ID" },
  { key: "main_image", label: "Image", type: "image" },
  { key: "product_name", label: "Product Name" },
  { key: "category_name", label: "Category" },
  { key: "brand_name", label: "Brand" },
  { key: "stock_qty", label: "Stock" },
  { key: "status", label: "Status" },
]}


        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
