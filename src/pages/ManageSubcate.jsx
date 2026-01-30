import { useState, useRef, useEffect } from "react";
import Table from "../components/Table";
import axios from 'axios';
export default function ManageSubcate() {
    const fileInputRef = useRef(null);
const [editingSubcategory, setEditingSubcategory] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [categories, setCategories] = useState([]);

const [form, setForm] = useState({
  subcategoryName: "",
  category_id: "",
  image: null,
  status: "active",
});



useEffect(() => {
  axios
    .get("http://localhost:5000/api/admin/categories")
    .then(res => setCategories(res.data))
    .catch(err => console.error(err));
}, []);

const [subcategories, setSubcategories] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5000/api/admin/subcategories")
    .then(res => {
      const data = res.data.map(item => ({
        ...item,
        image: item.image ? `http://localhost:5000/${item.image}` : null
      }));
      setSubcategories(data);
    });
}, [refreshKey]);


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

  if (!form.subcategoryName.trim())
    temp.subcategoryName = "SubCategory Name is required";

  if (!form.category_id)
    temp.category_id = "Parent Category is required";

if (!editingSubcategory && !form.image)
    temp.image = "Image is required";

  setErrors(temp);
  return Object.keys(temp).length === 0;
};


    // -----------------------
    // Submit Form
    // -----------------------
    const handleSubmit = async () => {
        if (!validate()) return;

        setLoading(true);
        setSuccess("");

const url = editingSubcategory
  ? `http://localhost:5000/api/admin/subcategories/${editingSubcategory.id}`
  : "http://localhost:5000/api/admin/subcategories";

const method = editingSubcategory ? "PUT" : "POST";

        const formData = new FormData();
        formData.append("subcategory_name", form.subcategoryName);
formData.append("category_id", form.category_id);
formData.append("status", form.status);

        if (form.image) {
            formData.append("image", form.image);
        }

        try {
            await fetch(url, {
                method,
                body: formData,
            });

            setSuccess(
editingSubcategory
  ? "SubCategory updated successfully!"
  : "SubCategory added successfully!"

            );

            setRefreshKey((prev) => prev + 1);

            // reset
            setForm({
  subcategoryName: "",
  category_id: "",
  image: null,
  status: "active",
});


            setPreview(null);
setEditingSubcategory(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            setTimeout(() => {
document.getElementById("closeSubCategoryModal").click();
                setSuccess("");
            }, 1000);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // handle edit//

   const handleEdit = (row) => {
  setEditingSubcategory(row);

  setForm({
    subcategoryName: row.name || "",
    category_id: row.category_id || "",
    image: null,
    status: row.status || "active",
  });

  setPreview(row.image ? `http://localhost:5000/${row.image}` : null);

  const modal = new window.bootstrap.Modal(
    document.getElementById("addSubCategory")
  );
  modal.show();
};


    const handleDelete = (row) => {
if (!window.confirm(`Delete ${row.name}?`)) return;

       fetch(`http://localhost:5000/api/admin/subcategories/${row.id}`, {
  method: "DELETE",
})
.then(() => {
alert("SubCategory deleted successfully");
            setRefreshKey((prev) => prev + 1);
        });
    };

    return (
        <div>
<h5>Manage SubCategories List</h5>

            {/* Add New Button */}
            <button
                className='btn btn-sm btn-dark'
                style={{ fontSize: "14px" }}
                data-bs-toggle='modal'
                data-bs-target='#addSubCategory'>
                Add New
            </button>

            {/* Category Modal */}
            <div
                className='modal fade'
id="addSubCategory"
                tabIndex='-1'
                data-bs-backdrop='static'
                data-bs-keyboard='false'
                style={{ fontSize: "14px" }}>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>
{editingSubcategory ? "Edit SubCategory" : "Add New SubCategory"}
                            </h5>
                            <button
id='closeSubCategoryModal'
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'></button>
                        </div>

                        <div className='modal-body'>
                            {/* Success Message */}
                            {success && (
                                <div className='alert alert-success py-1 text-center'>
                                    {success}
                                </div>
                            )}

                            {/* Category Name */}
                            <div className='mb-3'>
                               <label>SubCategory Name</label>
<input
  id="subcategoryName"
  className="form-control"
  value={form.subcategoryName ?? ""}
  onChange={handleChange}
/>

                                {errors.subcategoryName && (
                                    <small className='text-danger'>{errors.subcategoryName}</small>
                                )}
                            </div>

                            {/* parent category */}
                           <div className="mb-3">
  <label className="form-label">Parent Category</label>
 <select
  id="category_id"
  className="form-select"
  value={form.category_id ?? ""}
  onChange={handleChange}
>

    <option value="">Select Category</option>
    {categories.map(cat => (
      <option key={cat.id} value={cat.id}>
        {cat.category_name}
      </option>
    ))}
  </select>

  {errors.category_id && (
    <small className="text-danger">{errors.category_id}</small>
  )}
</div>

                            {/* Image */}
                            <div className='mb-3'>
                                <label className='form-label'>Image</label>
                                <input
                                    type='file'
                                    id='image'
                                    className='form-control'
                                    ref={fileInputRef}
                                    onChange={handleChange}
                                />
                                {errors.image && (
                                    <small className='text-danger'>{errors.image}</small>
                                )}

                                {preview && (
                                    <img
                                        src={preview}
                                        alt='Preview'
                                        style={{
                                            width: "80px",
                                            marginTop: "10px",
                                            borderRadius: "4px",
                                        }}
                                    />
                                )}
                            </div>

                            {/* Status */}
                            <div className='mb-3'>
                                <label className='form-label'>Status</label>
                                <select
                                    id='status'
                                    className='form-select'
                                    value={form.status}
                                    onChange={handleChange}>
                                    <option value='active'>Active</option>
                                    <option value='inactive'>Inactive</option>
                                </select>
                                {errors.status && (
                                    <small className='text-danger'>{errors.status}</small>
                                )}
                            </div>

                            
                        </div>

                        <div className='modal-footer'>
                            <button
                                className='btn btn-success'
                                onClick={handleSubmit}
                                disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className='spinner-border spinner-border-sm me-2'></span>
                                        Saving...
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </button>

                            <button className='btn btn-secondary' data-bs-dismiss='modal'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           <Table
  apiUrl="http://localhost:5000/api/admin/subcategories"
  refreshKey={refreshKey}
  pageSize={5}
  columns={[
    { key: "image", label: "Image", type: "image" },
    { key: "name", label: "SubCategory Name" },
{ key: "category_name", label: "Parent Category" },
{ key: "created_at", label: "Created At" },
{ key: "updated_on", label: "Updated At" },

    { key: "status", label: "Status", type: "status" },
  ]}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>


        </div>
    );
}
