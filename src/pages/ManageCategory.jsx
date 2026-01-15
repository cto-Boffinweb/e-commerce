import { useState, useRef, useEffect } from "react";
import Table from "../components/Table";
import axios from 'axios';
export default function ManageCategory() {
	const fileInputRef = useRef(null);
	const [editingCategory, setEditingCategory] = useState(null);
	const [refreshKey, setRefreshKey] = useState(0);
	const [preview, setPreview] = useState(null);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const [types, setTypes] = useState([]); 

	const [form, setForm] = useState({
		categoryName: "",
		image: null,
		status: "active",
		type_id: "",
	});

	 useEffect(() => {
    
    axios
      .get("http://localhost:5000/api/types") 
      .then((res) => setTypes(res.data))
      .catch((err) => console.error("Type fetch error:", err));
  }, []);


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
		if (!form.type_id) temp.type_id = "Category Type is required";

		if (!editingCategory && !form.image) {
			temp.image = "Image is required";
		} else if (form.image && !form.image.type.startsWith("image/")) {
			temp.image = "Only image files allowed";
		}

		if (!form.status) temp.status = "Status is required";

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

		// 🔑 yahi decide hoga ADD ya EDIT
		const url = editingCategory
			? `http://localhost:5000/api/admin/categories/${editingCategory.id}`
			: "http://localhost:5000/api/admin/categories";

		const method = editingCategory ? "PUT" : "POST";

		const formData = new FormData();
		formData.append("category_name", form.categoryName);
		formData.append("status", form.status);
		formData.append("type_id", form.type_id);

		if (form.image) {
			formData.append("image", form.image);
		}

		try {
			await fetch(url, {
				method,
				body: formData,
			});

			setSuccess(
				editingCategory
					? "Category updated successfully!"
					: "Category added successfully!"
			);

			setRefreshKey((prev) => prev + 1);

			// reset
			setForm({
				categoryName: "",
				image: null,
				status: "active",
				type_id: "",
			});

			setPreview(null);
			setEditingCategory(null);

			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}

			setTimeout(() => {
				document.getElementById("closeCategoryModal").click();
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
		setEditingCategory(row);

		setForm({
			categoryName: row.category_name,
			image: null,
			status: row.status,
			type_id: row.type_id,
		});

		setPreview(row.image ? `http://localhost:5000/${row.image}` : null);

		const modal = new window.bootstrap.Modal(
			document.getElementById("addCategory")
		);
		modal.show();
	};

	const handleDelete = (row) => {
		if (!window.confirm(`Delete ${row.category_name}?`)) return;

		fetch(`http://localhost:5000/api/admin/categories/${row.id}`, {
			method: "DELETE",
		}).then(() => {
			alert("Category deleted successfully");
			setRefreshKey((prev) => prev + 1);
		});
	};

	return (
		<div>
			<h5>Manage Categories List</h5>

			{/* Add New Button */}
			<button
				className='btn btn-sm btn-dark'
				style={{ fontSize: "14px" }}
				data-bs-toggle='modal'
				data-bs-target='#addCategory'>
				Add New
			</button>

			{/* Category Modal */}
			<div
				className='modal fade'
				id='addCategory'
				tabIndex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				style={{ fontSize: "14px" }}>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>
								{editingCategory ? "Edit Category" : "Add New Category"}
							</h5>
							<button
								id='closeCategoryModal'
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
								<label className='form-label'>Category Name</label>
								<input
									type='text'
									id='categoryName'
									className='form-control'
									value={form.categoryName}
									onChange={handleChange}
								/>
								{errors.categoryName && (
									<small className='text-danger'>{errors.categoryName}</small>
								)}
							</div>
							{/* Category Type */}
							<div className="mb-3">
																<label className='form-label'>Category Type</label>

							<select className="form-select"
        value={form.type_id}
        onChange={(e) => setForm({ ...form, type_id: e.target.value })}
      >
        <option value="">Select Type</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.type_name}
          </option>
        ))}
      </select>
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
				apiUrl='http://localhost:5000/api/admin/categories'
				refreshKey={refreshKey}
				columns={[
					{ key: "image", label: "Image", type: "image" },
					{ key: "category_name", label: "Category Name" },
					{ key: "type_id", label: " Type Id" },
					{ key: "created_at", label: "Created At" },
					{ key: "last_updated", label: "Updated At" },
					{ key: "status", label: "Status", type: "status" },
				]}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
		</div>
	);
}
