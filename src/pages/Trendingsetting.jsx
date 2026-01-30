import { useEffect, useState } from "react";

export default function AdminTrendingSettings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/productlist")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const toggleTrending = async (id, current) => {
    await fetch(`http://localhost:5000/api/admin/products/trending/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_tranding: current ? 0 : 1 }),
    });

    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, is_tranding: current ? 0 : 1 } : p
      )
    );
  };

  return (
    <div className="container">
      <h5>Trending Products Settings</h5>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Trending</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.product_name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={p.is_tranding === 1}
                  onChange={() => toggleTrending(p.id, p.is_tranding)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
