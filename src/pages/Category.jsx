import { useState, useRef } from "react";
import Table from "../components/Table";

export default function Category() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    categoryName: "",
    image: null,
    status: "Active",
    parent: "",
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // -----------------------
  // Handle Change
  // -----------------------
  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));

      if (file) setPreview(URL.createObjectURL(file));
      return;
    }

    setForm((prev) => ({ ...prev, [id]: value }));
  };

  // -----------------------
  // Validate Form
  // -----------------------
  const validate = () => {
    let temp = {};

    if (!form.categoryName.trim())
      temp.categoryName = "Category Name is required";

    if (!form.image) temp.image = "Image is required";
    else if (!form.image.type.startsWith("image/"))
      temp.image = "Only image files allowed";

    if (!form.status) temp.status = "Status is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // -----------------------
  // Submit Form
  // -----------------------
  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Category added successfully!");

      // Reset form
      setForm({
        categoryName: "",
        image: null,
        status: "Active",
        parent: "",
      });

      setPreview(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Close modal after 1 sec
      setTimeout(() => {
        document.getElementById("closeCategoryModal").click();
        setSuccess("");
      }, 1000);
    }, 1200);
  };

  return (
    <div>
      <h5>Manage Categories List</h5>

      {/* Add New Button */}
      <button
        className="btn btn-sm btn-dark"
        style={{ fontSize: "14px" }}
        data-bs-toggle="modal"
        data-bs-target="#addCategory"
      >
        Add New
      </button>

      {/* Category Modal */}
      <div
        className="modal fade"
        id="addCategory"
        tabIndex="-1"
        style={{ fontSize: "14px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add New Category</h5>
              <button
                id="closeCategoryModal"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              {/* Success Message */}
              {success && (
                <div className="alert alert-success py-1 text-center">
                  {success}
                </div>
              )}

              {/* Category Name */}
              <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control"
                  value={form.categoryName}
                  onChange={handleChange}
                />
                {errors.categoryName && (
                  <small className="text-danger">{errors.categoryName}</small>
                )}
              </div>

              {/* Image */}
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  id="image"
                  className="form-control"
                  ref={fileInputRef}
                  onChange={handleChange}
                />
                {errors.image && (
                  <small className="text-danger">{errors.image}</small>
                )}

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "80px",
                      marginTop: "10px",
                      borderRadius: "4px",
                    }}
                  />
                )}
              </div>

              {/* Status */}
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  id="status"
                  className="form-select"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {errors.status && (
                  <small className="text-danger">{errors.status}</small>
                )}
              </div>

              {/* Parent Category */}
              <div className="mb-3">
                <label className="form-label">Parent Category</label>
                <select
                  id="parent"
                  className="form-select"
                  value={form.parent}
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-success"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </button>

              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}
