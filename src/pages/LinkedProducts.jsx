import { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
export default function LinkedProducts({ formValues, setFormValues }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
//   const [products, setProducts] = useState([]); 

// useEffect(() => {
//   fetch("https://api.example.com/products") // apni API URL yahan
//     .then((res) => res.json())
//     .then((data) => setProducts(data))
//     .catch((err) => console.error("Error fetching products:", err));
// }, []);


  const dummyProducts = [
    { id: 1, product_name: "Red Shirt", product_image: img1 },
    { id: 2, product_name: "Blue Jeans", product_image: img2 },
    { id: 3, product_name: "Green Hat", product_image: img3 },
  ];

  // Search input handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setTerm(value);

    if (value.length > 1) {
      const filtered = dummyProducts.filter((p) =>
        p.product_name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  // Select a product (add chip)
  const selectProduct = (product) => {
    const existing = formValues.upsell || [];
    if (!existing.find((p) => p.id === product.id)) {
      setFormValues({ ...formValues, upsell: [...existing, product] });
    }
    setTerm("");
    setShowDropdown(false);
  };

  // Remove product chip
  const removeProduct = (id) => {
    const updated = (formValues.upsell || []).filter((p) => p.id !== id);
    setFormValues({ ...formValues, upsell: updated });
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search product by names"
        value={term}
        onChange={handleSearch}
      />

      {showDropdown && (
        <div
          className="list-group"
          style={{
            position: "absolute",
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
         {results.map((row) => (
  <button
    key={row.id}
    className="list-group-item list-group-item-action d-flex align-items-center"
    onClick={() => selectProduct(row)}
  >
    <img
      src={row.product_image}
      width="30"
      alt=""
      style={{ marginRight: "8px" }}
    />
    {row.product_name}
  </button>
))}

        </div>
      )}

      <div className="mt-2">
        <h6>Selected Upsells:</h6>
        <div>
          {(formValues.upsell || []).map((p) => (
            <div
              key={p.id}
              className="d-inline-block border p-1 mr-1 mt-1"
            >
              <img
                src={p.product_image}
                width="30"
                alt=""
              />{" "}
              {p.product_name}
              <span
                style={{
                  cursor: "pointer",
                  color: "red",
                  marginLeft: "5px",
                }}
                onClick={() => removeProduct(p.id)}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
