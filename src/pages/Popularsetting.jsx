import React, { useState, useRef } from "react";

export default function ProductSettings() {
  const fileInputRefs = useRef({});
  const [products, setProducts] = useState([
    {
      id: Date.now(),
      image: null,
      preview: null,
      title: "",
      price: "",
      oldPrice: "",
      stars: 5,
      trending: false,
      popular: false,
      errors: {},
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Add new product
  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        image: null,
        preview: null,
        title: "",
        price: "",
        oldPrice: "",
        stars: 5,
        trending: false,
        popular: false,
        errors: {},
      },
    ]);
  };

  // Remove product
  const removeProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  // Handle field change
  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  // Handle image upload
  const handleImageChange = (index, file) => {
    const updated = [...products];
    updated[index].image = file;
    updated[index].preview = file ? URL.createObjectURL(file) : null;
    setProducts(updated);
  };

  // Validate before saving
  const validate = () => {
    let isValid = true;
    const updated = [...products];

    updated.forEach((p) => {
      const errors = {};
      if (!p.title.trim()) errors.title = "Title is required";
      if (!p.price.trim()) errors.price = "Price is required";
      if (!p.image) errors.image = "Image is required";
      p.errors = errors;
      if (Object.keys(errors).length > 0) isValid = false;
    });

    setProducts(updated);
    return isValid;
  };

  // Save products (localStorage / API)
  const saveProducts = () => {
    if (!validate()) return;
    setLoading(true);

    const payload = products.map(({ image, preview, errors, ...rest }) => rest);

    // Example: saving to localStorage
    localStorage.setItem("products", JSON.stringify(payload));

    alert("Products saved successfully!");
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Manage Products</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Old Price</th>
              <th>Stars</th>
              <th>Trending</th>
              <th>Popular</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>

                {/* Image Upload */}
                <td>
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(index, e.target.files[0])
                    }
                    ref={(el) => (fileInputRefs.current[p.id] = el)}
                  />
                  {p.errors.image && (
                    <small className="text-danger d-block">{p.errors.image}</small>
                  )}
                  {p.preview && (
                    <img
                      src={p.preview}
                      alt="preview"
                      className="mt-1"
                      style={{ width: "60px", borderRadius: "4px" }}
                    />
                  )}
                </td>

                {/* Title */}
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={p.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                  {p.errors.title && (
                    <small className="text-danger">{p.errors.title}</small>
                  )}
                </td>

                {/* Price */}
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={p.price}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                  />
                  {p.errors.price && (
                    <small className="text-danger">{p.errors.price}</small>
                  )}
                </td>

                {/* Old Price */}
                <td>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={p.oldPrice}
                    onChange={(e) =>
                      handleChange(index, "oldPrice", e.target.value)
                    }
                  />
                </td>

                {/* Stars */}
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    min="0"
                    max="5"
                    value={p.stars}
                    onChange={(e) =>
                      handleChange(index, "stars", e.target.value)
                    }
                  />
                </td>

                {/* Trending Checkbox */}
                <td>
                  <input
                    type="checkbox"
                    checked={p.trending}
                    onChange={(e) =>
                      handleChange(index, "trending", e.target.checked)
                    }
                  />
                </td>

                {/* Popular Checkbox */}
                <td>
                  <input
                    type="checkbox"
                    checked={p.popular}
                    onChange={(e) =>
                      handleChange(index, "popular", e.target.checked)
                    }
                  />
                </td>

                {/* Remove Button */}
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeProduct(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-success" onClick={addProduct}>
          + Add Product
        </button>
        <button
          className="btn btn-primary"
          onClick={saveProducts}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Saving...
            </>
          ) : (
            "Save Products"
          )}
        </button>
      </div>
    </div>
  );
}
