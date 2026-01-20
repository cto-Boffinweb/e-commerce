import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/Table";

export default function ProductList() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
const [categoriesList, setCategoriesList] = useState([]);
const [brandsList, setBrandsList] = useState([]);
const [typeList, setTypeList] = useState([]);

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
useEffect(() => {
  // Fetch Categories
  fetch("http://localhost:5000/api/admin/categories")
    .then(res => res.json())
    .then(data => setCategoriesList(data.data || data))
    .catch(err => console.log(err));
    
    //fetch type
    fetch("http://localhost:5000/api/types")
    .then(res => res.json())
    .then(data => setTypeList(data.data || data))
    .catch(err => console.log(err));


  // Fetch Brands
  fetch("http://localhost:5000/api/brands")
    .then(res => res.json())
    .then(data => setBrandsList(data.data || data))
    .catch(err => console.log(err));
}, []);
useEffect(() => {
  return () => {
    if (preview) URL.revokeObjectURL(preview);
  };
}, [preview]);

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
if (!form.categories) temp.categories = "Category is required";

if (Number(form.manage_stock) === 1 && !form.stock_qty) {
  temp.stock_qty = "Stock quantity required";
}


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

    if (!validate()) return;

    setLoading(true);
    setSuccess("");

    const isUpdate = !!editingProduct;

   const formData = new FormData();
formData.append("product_name", form.product_name);
formData.append("status", form.status);
if (form.main_image) formData.append("main_image", form.main_image);
if (form.product_attributes)
  formData.append("product_attributes", JSON.stringify(form.product_attributes));
formData.append("categories", form.categories);
formData.append("subcategories", form.subcategories);
formData.append("brands", form.brands);
formData.append("type", form.type);
formData.append("manage_stock", form.manage_stock);
formData.append("stock_qty", form.stock_qty);

const url = isUpdate
  ? `http://localhost:5000/api/admin/productlist/${editingProduct.id}`
  : "http://localhost:5000/api/admin/productlist";
const method = isUpdate ? "PUT" : "POST";

    fetch(url, { method, body: formData })
.then(res => {
    if (!res.ok) throw new Error("Failed to save product");
    return res.json();
  })      .then((data) => {
        setLoading(false);
        setSuccess(isUpdate ? "Product updated successfully!" : "Product added successfully!");
        resetForm();
        setTimeout(() => {
          document.getElementById("closeBtn").click();
          setSuccess("");
          setRefreshKey(prev => prev + 1);

          setEditingProduct(null);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
            setErrors({ api: err.message });

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


 

const handleEdit = (product) => {
  navigate(`/addproduct/${product.id}`, {
    state: { product }
  });
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

useEffect(() => {
  if (!editingProduct) resetForm();
}, [editingProduct]);


  return (
    <div>
      <h5>Products</h5>

      {/* Add New Button */}
     <Link to="/addproduct">
  <button className="btn btn-sm btn-dark" style={{ fontSize: "14px" }}>
    Add New
  </button>
</Link>

      

      {/* Table with Edit/Delete */}
      <Table
        apiUrl="http://localhost:5000/api/admin/productlist"
         refreshKey={refreshKey}
      columns={[
  { key: "main_image", label: "Image", type: "image" },
  { key: "product_name", label: "Product Name" },
  { key: "category_name", label: "Category" },
  { key: "brand_name", label: "Brand" },
 { key: "type", label: "Type" },
   { key: "stock_qty", label: "Stock" },
  { key: "status", label: "Status" },
]}

 pageSize={5} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
