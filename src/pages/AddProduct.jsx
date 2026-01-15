import { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import ProductData from "./ProductData";
import img2 from "../assets/img2.jpg";
import { validate } from "../components/Validation";
import axios from "axios";
import { useEffect } from "react";

export default function AddProduct() {
	const [variations, setVariations] = useState([]);
const [variationData, setVariationData] = useState([]);

	const [allProducts, setAllProducts] = useState([]);
	const [types, setTypes] = useState([]);
	const [categories, setCategories] = useState([]);
	const [brands, setBrands] = useState([]);
	const [variationPrices, setVariationPrices] = useState({ mrp: [], sell: [] });

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [formValues, setFormValues] = useState({
		productName: "",
		tags: "",
		type: "",
		category: "",
		brand: "",
		shortDesc: "",
		fullDesc: "",
		image: null,
		productType: "variable",
		attributes: [],
		attrName: "",
		attrValues: "",
		variations: [],
		variationData: [],
		upsells: [],
		linked_products: [],
	});
	const [errors, setErrors] = useState({});
	const [imagePreview, setImagePreview] = useState(null);
	const fileRef = useRef();

	const handleAddAttribute = (attr) => {
		setFormValues((prev) => ({
			...prev,
			attributes: [...prev.attributes, attr],
		}));
	};

	const handleRemoveAttribute = (id) => {
		setFormValues((prev) => ({
			...prev,
			attributes: prev.attributes.filter((a) => a.id !== id),
		}));
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);

				const [catRes, brandRes, typeRes, productRes] = await Promise.all([
					axios.get("http://localhost:5000/api/admin/categories"),
					axios.get("http://localhost:5000/api/brands"),
					axios.get("http://localhost:5000/api/types"),
					axios.get("http://localhost:5000/api/admin/products"), // ✅ UPSSELLS
				]);

				setCategories(catRes.data);
				setBrands(brandRes.data);
				setTypes(typeRes.data);
				setAllProducts(productRes.data); // ✅ ALL PRODUCTS FOR UPSELLS
			} catch (err) {
				console.error(err);
				setError("Failed to load data");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const rules = {
		productName: { required: true, min: 3 },
		type: { required: true },
		tags: { required: true },
		category: { required: true },
		brand: { required: true },
		shortDesc: { required: true, min: 10 },
		fullDesc: { required: true, min: 20 },
		image: { required: true, type: "image" },
	};
	// ================= VARIATIONS =================
	const generateVariations = () => {
		if (!formValues.attributes || formValues.attributes.length === 0) return;

		// attributes values extract
		const valuesArray = formValues.attributes.map((attr) => attr.values);

		// cartesian product (all combinations)
		const combinations = valuesArray.reduce(
			(a, b) => a.flatMap((d) => b.map((e) => [...d, e])),
			[[]]
		);

		setFormValues({
			...formValues,
			variations: combinations,
		});
	};

	const handlePublish = async () => {
		const newErrors = validate(formValues, rules);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const data = new FormData();
			data.append("product_name", formValues.productName);
			data.append("categories", formValues.category);
			data.append("brands", formValues.brand);
			data.append("type", formValues.type);
			data.append("short_description", formValues.shortDesc);
			data.append("upsells", JSON.stringify(formValues.upsells || []));
			data.append(
				"linked_products",
				JSON.stringify(formValues.linked_products || [])
			);
const formattedAttributes = {};

formValues.attributes.forEach((attr) => {
  if (attr.name && attr.values && attr.values.length > 0) {
    formattedAttributes[attr.name] = attr.values;
  }
});

data.append("attributes", JSON.stringify(formattedAttributes));

data.append("description", formValues.fullDesc);
data.append(
  "tags",
  JSON.stringify(formValues.tags.split(",").map((t) => t.trim()))
);
data.append("main_image", formValues.image);

data.append("variations", JSON.stringify(formValues.variationData || []));

			try {
				await axios.post("http://localhost:5000/api/admin/addProducts", data, {
					headers: { "Content-Type": "multipart/form-data" },
				});
				alert("Product added successfully!");

				setFormValues({
					productName: "",
					tags: "",
					type: "",
					category: "",
					brand: "",
					shortDesc: "",
					fullDesc: "",
					image: null,
					productType: "variable",
					attributes: [],
					attrName: "",
					attrValues: "",
					variations: [],
				});

				setImagePreview(null);
				if (fileRef.current) fileRef.current.value = "";
			} catch (err) {
				console.error(err);
				alert("Error adding product!");
			}
		}
	};

	if (loading) {
		return (
			<div className='container-fluid text-center mt-5'>
				<div className='spinner-border text-primary mb-2'></div>
				<p>Loading product data...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className='container-fluid text-center mt-5 text-danger'>
				{error}
			</div>
		);
	}

	return (
		<div
			className='container-fluid mt-4 p-3'
			style={{ backgroundColor: "#f0e9e97c", fontSize: "14px" }}>
			<div className='row'>
				{/* LEFT SIDE */}
				<div className='col-lg-8 col-md-12'>
					{/* Product Name */}
					<div className='panel-box mb-2 shadow p-2'>
						<label className='form-label'>
							<h6>Product name</h6>
						</label>
						<input
							type='text'
							className='form-control rounded-3'
							placeholder='Enter product name'
							value={formValues.productName}
							onChange={(e) =>
								setFormValues({ ...formValues, productName: e.target.value })
							}
						/>
						{errors.productName && (
							<p style={{ color: "red" }}>{errors.productName}</p>
						)}
					</div>

					{/* Short Description */}
					<div className='editor-wrapper mb-2 shadow p-2'>
						<label className='form-label'>
							<h6>Short description</h6>
						</label>

						<div className='editor-box  '>
							<CKEditor
								editor={ClassicEditor}
								data={formValues.shortDesc}
								onChange={(event, editor) => {
									setFormValues({ ...formValues, shortDesc: editor.getData() });
								}}
							/>
							{errors.shortDesc && (
								<p style={{ color: "red" }}>{errors.shortDesc}</p>
							)}
						</div>
					</div>

					{/* Description */}
					<div className='editor-wrapper mb-2 p-2 shadow'>
						<label className='form-label'>
							<h6>Description</h6>
						</label>

						<div className='editor-box'>
							<CKEditor
								editor={ClassicEditor}
								data={formValues.fullDesc}
								onChange={(event, editor) => {
									setFormValues({ ...formValues, fullDesc: editor.getData() });
								}}
							/>
							{errors.fullDesc && (
								<p style={{ color: "red" }}>{errors.fullDesc}</p>
							)}
						</div>
					</div>
					{formValues.productType === "variable" && (
						<ProductData
							formValues={formValues}
							setFormValues={setFormValues}
							errors={errors}
							setErrors={setErrors}
							allProducts={allProducts}
							variationPrices={variationPrices}
							setVariationPrices={setVariationPrices}
							handleAddAttribute={handleAddAttribute}
							handleRemoveAttribute={handleRemoveAttribute}
							generateVariations={generateVariations}
							 variations={variations}              
  setVariations={setVariations}        
  variationData={variationData}        
  setVariationData={setVariationData}
						/>
					)}
				</div>

				{/* RIGHT SIDE */}
				<div className='col-lg-4 col-md-12 '>
					<div className='panel-box border p-3 mb-2 shadow'>
						<label className='form-label'>Product Type</label>
						<select
							className='form-select'
							value={formValues.productType}
							onChange={(e) =>
								setFormValues({ ...formValues, productType: e.target.value })
							}>
							<option value='simple'>Simple Product</option>
							<option value='variable'>Variable Product</option>
						</select>
					</div>

					<div className='panel-box border p-3 mb-2 shadow'>
						<label className='form-label'>Parent Type</label>
						<select
							className='form-select'
							value={formValues.type}
							onChange={(e) =>
								setFormValues({ ...formValues, type: e.target.value })
							}>
							<option value=''>Select Type</option>

							{types && types.length > 0 ? (
								types.map((t) => (
									<option key={t.id} value={t.id}>
										{t.type_name}
									</option>
								))
							) : (
								<option disabled>No types found</option>
							)}
						</select>
					</div>

					{/* Categories */}
					<div className='panel-box border p-3 mb-2 shadow'>
						<label className='form-label'>Categories</label>
						<select
							className='form-select'
							value={formValues.category}
							onChange={(e) =>
								setFormValues({ ...formValues, category: e.target.value })
							}>
							<option value=''>Select Category</option>
							{categories &&
								categories.length > 0 &&
								categories.map((c) => (
									<option key={c.id} value={c.id}>
										{c.category_name}
									</option>
								))}
						</select>

						{errors.category && (
							<p style={{ color: "red" }}>{errors.category}</p>
						)}
					</div>

					{/* Brands */}
					<div className='panel-box border p-3 mb-2 shadow'>
						<label className='form-label'>Brands</label>
						<select
							className='form-select'
							value={formValues.brand}
							onChange={(e) =>
								setFormValues({ ...formValues, brand: e.target.value })
							}>
							<option value=''>Select Brand</option>
							{brands && brands.length > 0 ? (
								brands.map((b) => (
									<option key={b.id} value={b.id}>
										{b.brand_name}
									</option>
								))
							) : (
								<option disabled>Loading brands...</option>
							)}
						</select>

						{errors.brand && <p style={{ color: "red" }}>{errors.brand}</p>}
					</div>

					{/* Tags */}
					<div className='panel-box p-3 border shadow'>
						<label className='form-label'>Tags</label>
						<input
							type='text'
							className='form-control'
							placeholder='Comma separated tags'
							value={formValues.tags}
							onChange={(e) =>
								setFormValues({ ...formValues, tags: e.target.value })
							}
						/>
						{errors.tags && <p style={{ color: "red" }}>{errors.tags}</p>}
						<small className='text-muted'>Separate tags with commas.</small>
					</div>

					<div className='card mt-2'>
						<div className='card-header'>Product Image</div>
						<div className='card-body text-center'>
							<div className='img-box'>
								{imagePreview ? (
									<img src={imagePreview} alt='preview' />
								) : (
									<>
										<img
											src={img2}
											alt=''
											style={{ height: "150px", objectFit: "contain" }}
										/>
									</>
								)}
							</div>

							<input
								type='file'
								className='my-2'
								ref={fileRef}
								onChange={(e) => {
									const file = e.target.files[0];
									setFormValues({ ...formValues, image: file });
									if (file) {
										setImagePreview(URL.createObjectURL(file));
									}
								}}
							/>

							{errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

							<button
								className='btn btn-link text-danger p-0'
								onClick={() => {
									setImagePreview(null);
									setFormValues({ ...formValues, image: null });
									if (fileRef.current) fileRef.current.value = "";
								}}>
								Remove
							</button>
						</div>
					</div>

					<div className='card my-2 '>
						<div className='card-header'>Gallery Images</div>
						<div className='card-body'>
							<button className='btn btn-outline-primary btn-sm'>
								Add images
							</button>
						</div>
					</div>

					<div className='text-end'>
						<button className='btn btn-success w-25' onClick={handlePublish}>
							Publish
						</button>
					</div>
				</div>
			</div>
			<style>
				{`
        
        .editor-box {
  background: #f5f5f5; 
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  padding:3px;
}

.ck-editor__editable {
  

  min-height: 150px !important;
  max-height: 150px !important;
  overflow-y: auto !important;
}
.img-box {
 height:160px;
}
.img-box img{
height:150px;
}


        `}
			</style>
		</div>
	);
}
