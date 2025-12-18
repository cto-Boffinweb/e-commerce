import React, { useState } from "react";

export default function Trendingsetting() {
  const [trendingProducts, setTrendingProducts] = useState([
    {
      id: Date.now(),
      image: "",
      title: "",
      price: "",
      oldPrice: "",
      stars: 5,
    },
  ]);

  // Update field value
  const handleChange = (index, field, value) => {
    const updated = [...trendingProducts];
    updated[index][field] = value;
    setTrendingProducts(updated);
  };

  // Add new item
  const addItem = () => {
    setTrendingProducts([
      ...trendingProducts,
      {
        id: Date.now(),
        image: "",
        title: "",
        price: "",
        oldPrice: "",
        stars: 5,
      },
    ]);
  };

  // Remove item
  const removeItem = (index) => {
    const updated = [...trendingProducts];
    updated.splice(index, 1);
    setTrendingProducts(updated);
  };

  // Save to localStorage
  const saveTrendingProducts = () => {
    localStorage.setItem("trendingProducts", JSON.stringify(trendingProducts));
    alert("Trending products saved");
    window.dispatchEvent(new Event("trendingUpdated"));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Trending Products</h2>
      
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Image Path</th>
            <th>Title</th>
            <th>Price</th>
            <th>Old Price</th>
            <th>Stars</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trendingProducts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.image}
                  onChange={(e) => handleChange(index, "image", e.target.value)}
                  placeholder="/images/product1.jpg"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  placeholder="Product Title"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                  placeholder="$199"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.oldPrice}
                  onChange={(e) => handleChange(index, "oldPrice", e.target.value)}
                  placeholder="$249"
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.stars}
                  onChange={(e) => handleChange(index, "stars", e.target.value)}
                  min="0"
                  max="5"
                />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => removeItem(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-success" onClick={addItem}>
          + Add Product
        </button>
        <button className="btn btn-primary" onClick={saveTrendingProducts}>
          Save Trending Products
        </button>
      </div>
    </div>
  );
}
