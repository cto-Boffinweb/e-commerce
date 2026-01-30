import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/Table";

export default function ProductList() {
    const navigate = useNavigate();
const [refreshKey, setRefreshKey] = useState(0);

const handleEdit = (product) => {
  navigate(`/addproduct/${product.id}`);
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
{ key: "type_name", label: "Type" },
  { key: "stock_qty", label: "Stock" },
  { key: "delivery_charge", label: "Delivery Charge" }, 
  { key: "status", label: "Status" },
]}

 pageSize={5} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
