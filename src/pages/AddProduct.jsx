import { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ProductData from "./ProductData";
import img2 from "../assets/img2.jpg";
import { validate } from "../components/Validation";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// 2-letter abbreviation from name
const getAbbr = (text = "") =>
	text
		.split(" ")
		.map((w) => w[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);

export default function AddProduct() {
	const [variationData, setVariationData] = useState([]);
	const { id } = useParams();
	const isEditMode = Boolean(id);
	const [isPublishing, setIsPublishing] = useState(false);

	const [allProducts, setAllProducts] = useState([]);
	const [types, setTypes] = useState([]);
	const [categories, setCategories] = useState([]);
	const [brands, setBrands] = useState([]);

	const [subcategories, setSubcategories] = useState([]);
	const [variations, setVariations] = useState([]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [formValues, setFormValues] = useState({
		productName: "",
		tags: "",
		type: "",
		category: "",
		subcategories: "",
		brand: "",
		shortDesc: "",
		fullDesc: "",
		image: null,
		manageStock: "yes",
		stockQty: "",
		productType: "variable",
		attributes: [],
		attrName: "",
		attrValues: "",
		mainProductSKU: "",
		mainProductCode: "",
		upsells: [],
		linked_products: [],

		weight: "",
		length: "",
		width: "",
		height: "",
		isDeliveryCharge: "no",
		deliveryCharge: 0,
		base_price: "",
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
	// 🔥 CATEGORY CHANGE → FETCH SUBCATEGORIES
	useEffect(() => {
		if (!formValues.category) return;

		const fetchSubcategories = async () => {
			try {
				const res = await axios.get(
					`http://localhost:5000/api/admin/subcategories/${formValues.category}`,
				);
				setSubcategories(res.data);
			} catch (err) {
				console.error("Subcategory fetch error", err);
				setSubcategories([]);
			}
		};

		fetchSubcategories();
	}, [formValues.category]);

	const rules = {
		productName: { required: true, min: 3 },
		type: { required: true },
		category: { required: true },
		brand: { required: true },

		// 👇 ONLY when publishing
		tags: { required: isPublishing },
		shortDesc: { required: isPublishing, min: 10 },
		fullDesc: { required: isPublishing, min: 20 },
		image: { required: isPublishing, type: "image" },

		weight: { required: isPublishing },
		length: { required: isPublishing },
		width: { required: isPublishing },
		height: { required: isPublishing },
	};

	// ================= VARIATIONS =================
	const generateVariations = () => {
		const attributes = formValues.attributes;

		if (!Array.isArray(attributes) || attributes.length === 0) {
			console.log("No attributes found");
			return;
		}

		// 🧹 remove attributes with empty values
		const validAttributes = attributes.filter(
			(attr) =>
				attr.values &&
				(Array.isArray(attr.values)
					? attr.values.length > 0
					: attr.values.trim() !== ""),
		);

		if (validAttributes.length === 0) {
			console.log("No valid attributes with values");
			return;
		}
		const valuesArray = validAttributes.map((attr) =>
			Array.isArray(attr.values)
				? attr.values
				: attr.values.split(",").map((v) => v.trim()),
		);

		const combos = valuesArray.reduce(
			(a, b) => a.flatMap((d) => b.map((e) => [...d, e])),
			[[]],
		);

		const data = combos.map((v) => {
			const clean = v
				.join("-")
				.toUpperCase()
				.replace(/[^A-Z0-9-]/g, "");
			return {
				variationName: v.join(" / "),
				variationValue: v.join(","),
				variationSKU: formValues.mainProductSKU
					? `${formValues.mainProductSKU}-${clean}`
					: clean,

				variationCode: formValues.mainProductCode
					? `${formValues.mainProductCode}-${clean}`
					: clean,

				mrp: "",
				sell: "",
				stock: 0,
			};
		});

		setVariations(combos);
		setVariationData(data);
	};

	// edit form
	useEffect(() => {
		if (!id) return;

		const fetchProduct = async () => {
			try {
				const productRes = await axios.get(
					`http://localhost:5000/api/admin/productlist/${id}`,
				);
				const product = productRes.data;

				const variantRes = await axios.get(
					`http://localhost:5000/api/admin/products/variants/${id}`,
				);
				const variants = variantRes.data?.variants || [];

				// ✅ Image preview
				setImagePreview(
					product.main_image
						? `http://localhost:5000/${product.main_image}`
						: null,
				);

				// ✅ Prefill form
				setFormValues((prev) => ({
					...prev,
					productName: product.product_name || "",
					shortDesc: product.short_description || "",
					fullDesc: product.description || "",
					type: String(product.type || ""),

					category: String(product.categories || ""),
					subcategories: String(product.subcategories || ""),
					brand: String(product.brands || ""),
					mainProductSKU: product.product_sku || "",
					mainProductCode: product.product_code || "",
					attributes: product.product_attributes
						? Object.entries(
								typeof product.product_attributes === "string"
									? JSON.parse(product.product_attributes)
									: product.product_attributes,
							).map(([name, values], i) => ({
								id: i + 1,
								name,
								values: Array.isArray(values)
									? values
									: values.split(",").map((v) => v.trim()),
							}))
						: [],
					// ✅ TAGS (string → input)
					tags: product.tags
						? typeof product.tags === "string"
							? JSON.parse(product.tags).join(",")
							: product.tags.join(",")
						: "",

					// ✅ UPSELLS (string → number[])
					upsells: product.upsells
						? typeof product.upsells === "string"
							? JSON.parse(product.upsells).map(Number)
							: product.upsells.map(Number)
						: [],

					// ✅ LINKED PRODUCTS (string → number[])
					linked_products: product.linked_products
						? typeof product.linked_products === "string"
							? JSON.parse(product.linked_products).map(Number)
							: product.linked_products.map(Number)
						: [],
					manageStock: product.manage_stock === 1 ? "yes" : "no",
					stockQty: Number(product.stock_qty || 0),
					deliveryCharge: Number(product.delivery_charge || 0),
					isDeliveryCharge:
						product.delivery_charge && product.delivery_charge > 0
							? "yes"
							: "no",

					// ✅ SHIPPING FIELDS
					weight: Number(product.weight || 0),
					length: Number(product.length || 0),
					width: Number(product.width || 0),
					height: Number(product.height || 0),

					productType: variants.length > 0 ? "variable" : "simple",
				}));

				// ✅ Prefill variations
				setVariations(
					variants.map((v) =>
						v.variation_value ? v.variation_value.split(",") : [],
					),
				);

				setVariationData(
					variants.map((v) => ({
						id: v.id,
						variationName: v.variation_name || "",
						variationValue: v.variation_value || "",
						variationSKU: v.variation_sku || "",
						variationCode: v.variation_product_code || "",
						mrp: Number(v.base_price || 0),
						sell: Number(v.sale_price || 0),
						stock: Number(v.stock || 0),
					})),
				);
			} catch (err) {
				console.error("Error fetching product:", err);
				alert("Failed to load product data");
			}
		};

		fetchProduct();
	}, [id]);
	// handle publish
	const handlePublish = async () => {
		setIsPublishing(true);

		const newErrors = validate(formValues, rules);
		setErrors(newErrors);

		if (Object.keys(newErrors).length !== 0) {
			setIsPublishing(false);
			return;
		}

		// variation check only on publish
		if (formValues.productType === "variable" && variationData.length === 0) {
			alert("Please generate variations before publishing");
			setIsPublishing(false);
			return;
		}

		// 3️⃣ Prepare FormData
		const data = new FormData();
		data.append("product_name", formValues.productName);
		data.append("categories", formValues.category);
		data.append("subcategories", formValues.subcategories || null);
		data.append("brands", formValues.brand);
		data.append("type", Number(formValues.type));
		data.append("short_description", formValues.shortDesc);
		data.append("description", formValues.fullDesc);
		data.append("manage_stock", formValues.manageStock === "yes" ? 1 : 0);
		data.append("delivery_charge", formValues.deliveryCharge || 0);
		data.append("weight", parseFloat(formValues.weight) || 0);
		data.append("length", parseFloat(formValues.length) || 0);
		data.append("width", parseFloat(formValues.width) || 0);
		data.append("height", parseFloat(formValues.height) || 0);
		data.append("product_sku", formValues.mainProductSKU);
		data.append("product_code", formValues.mainProductCode);
		// Tags / upsells / linked products (JSON)
		data.append("tags", JSON.stringify(formValues.tags.split(",")));
		data.append("upsells", JSON.stringify(formValues.upsells));
		data.append("linked_products", JSON.stringify(formValues.linked_products));

		// 4️⃣ Calculate total stock
		let finalStock = 0;
		if (formValues.productType === "variable") {
			finalStock = variationData.reduce(
				(sum, v) => sum + Number(v.stock || 0),
				0,
			);
		} else {
			finalStock = Number(formValues.stockQty || 0);
		}
		data.append("stock_qty", parseInt(finalStock) || 0);

		// 5️⃣ Format attributes for backend
		const formattedAttributes = formValues.attributes.reduce((acc, attr) => {
			acc[attr.name] = Array.isArray(attr.values)
				? attr.values
				: attr.values.split(",").map((v) => v.trim());
			return acc;
		}, {});
		data.append("product_attributes", JSON.stringify(formattedAttributes));

		// 6️⃣ Append variations
		data.append(
			"variations",
			JSON.stringify(
				variationData.map((v) => ({
					...v,
					mrp: parseFloat(v.mrp) || 0,
					sell: parseFloat(v.sell) || 0,
					stock: parseInt(v.stock) || 0,
				})),
			),
		);

		// 7️⃣ Append main image
		if (formValues.image) {
			data.append("main_image", formValues.image);
		}

		// 8️⃣ Send request
		try {
			if (isEditMode) {
				console.log('edit poduct mode')
				// ✅ Edit existing product
				await axios.put(
					`http://localhost:5000/api/admin/productlist/${id}`,
					data,
					{ headers: { "Content-Type": "multipart/form-data" } },
				);

				navigate("/productlist", {
					state: { success: "Product updated successfully" },
				});
			} else {
				// ✅ Add new product
				await axios.post("http://localhost:5000/api/admin/products", data, {
					headers: { "Content-Type": "multipart/form-data" },
				});

				alert("Product added successfully!");
			}
		} catch (err) {
			console.error(err);
			alert("Something went wrong");
		}
	};

	// sku n product code
	useEffect(() => {
		if (!formValues.productName || !formValues.brand || !brands.length) return;

		const brandObj = brands.find(
			(b) => String(b.id) === String(formValues.brand),
		);
		if (!brandObj) return;

		const brandAbbr = getAbbr(brandObj.brand_name);
		const productAbbr = getAbbr(formValues.productName);

		// 🔑 Decide if we need to generate
		const shouldGenerate =
			!formValues.mainProductSKU || // blank SKU
			!formValues.mainProductCode; // blank Code

		if (shouldGenerate) {
			const uniquePart = String(Date.now()).slice(-4); // 4-digit unique ID

			const newSKU = `${brandAbbr}-${productAbbr}-${uniquePart}`;
			const newCode = `${brandAbbr}${productAbbr}${uniquePart}`;

			setFormValues((prev) => ({
				...prev,
				mainProductSKU: newSKU,
				mainProductCode: newCode,
			}));
		}
	}, [formValues.productName, formValues.brand, brands]);

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
						{formValues.mainProductCode && (
							<small className='text-muted'>
								Product Code: <b>{formValues.mainProductCode}</b>
							</small>
						)}

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
								key={formValues.shortDesc}
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
							handleAddAttribute={handleAddAttribute}
							handleRemoveAttribute={handleRemoveAttribute}
							generateVariations={generateVariations}
							variationData={variationData}
							setVariationData={setVariationData}
							variations={variations}
							setVariations={setVariations}
							mainProductSKU={formValues.mainProductSKU}
							mainProductCode={formValues.mainProductCode}
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
								setFormValues({
									...formValues,
									category: e.target.value,
									subcategories: "",
								})
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
					{/* //subcategories */}

					<div className='panel-box border p-3 mb-2 shadow'>
						<label className='form-label'>Subcategories</label>
						<select
							className='form-select'
							name='subcategories'
							value={formValues.subcategories || ""}
							onChange={(e) =>
								setFormValues({
									...formValues,
									subcategories: e.target.value,
								})
							}>
							<option value=''>Select Subcategory</option>

							{subcategories.map((sc, index) => (
								<option key={`subcat-${sc.id}-${index}`} value={sc.id}>
									{sc.name}
								</option>
							))}
						</select>
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
