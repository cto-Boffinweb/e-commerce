import  { useRef, useState } from "react";
import Table from "../components/Table";

export default function Brands() {
  const fileInputRef = useRef(null);
 const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");


  const [form, setForm] = useState({
    brandName: "",
    image: null,
    status: "Active",
  });
// Reset form



   const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));

      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validate = () => {
    let temp = {};

    if (!form.brandName.trim()) temp.brandName = "Brand Name is required";
    if (!form.image) temp.image = "Thumbnail image is required";
    if (form.image && !form.image.type.startsWith("image/"))
      temp.image = "Only image files allowed";
    if (!form.status) temp.status = "Status is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // ----------------------------------
  // Submit + Loading + Success Message
  // ----------------------------------
  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    setSuccess("");

    // Fake API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess("Brand added successfully!");

      // Reset form
      setForm({
        brandName: "",
        image: null,
        status: "Active",
      });
      setPreview(null);

setForm({
  brandName: "",
  image: null,
  status: "Active",
});
setPreview(null);

// Reset file input safely
if (fileInputRef.current) {
  fileInputRef.current.value = "";
}

      // Close modal after 1 sec
      setTimeout(() => {
        document.getElementById("closeBtn").click();
        setSuccess("");
      }, 1000);
    }, 1500);
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
      >
        Add New
      </button>

      {/* Add New Modal */}
      <div
        className="modal fade"
        id="addNewModal"
        tabIndex="-1"
        style={{ fontSize: "14px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add New Brand</h5>
              <button id="closeBtn" type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">

              {/* Success Message */}
              {success && (
                <div className="alert alert-success py-1 text-center">{success}</div>
              )}

              <div className="mb-3">
                <label className="form-label">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  className="form-control"
                  value={form.brandName}
                  onChange={handleChange}
                />
                {errors.brandName && (
                  <small className="text-danger">{errors.brandName}</small>
                )}
              </div>

              {/* Image Upload */}
              <div className="mb-3">
                <label className="form-label">Upload Thumbnail:</label>
<input 
  type="file" 
  id="image" 
  className="form-control" 
  onChange={handleChange}
  ref={fileInputRef}
/>
                {errors.image && (
                  <small className="text-danger">{errors.image}</small>
                )}

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ width: "80px", marginTop: "10px", borderRadius: "4px" }}
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

            </div>

            {/* Modal Footer */}
            <div className="modal-footer">

              <button className="btn btn-success" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}
