import { useState, useMemo } from "react";

// 🔹 normalize helper
const normalize = (str = "") =>
  str.toLowerCase().replace(/\s+/g, "");

export default function LinkedProducts({
  allProducts = [],
  formValues,
  setFormValues,
}) {
  const [term, setTerm] = useState("");

  // 🔍 Base searched product
  const searchedProduct = useMemo(() => {
    if (!term) return null;

    return allProducts.find((p) =>
      normalize(p.product_name).includes(normalize(term))
    );
  }, [term, allProducts]);

  // 🟢 Similar → Upsells (same category OR brand)
  const upsellProducts = useMemo(() => {
    if (!searchedProduct) return [];

    return allProducts.filter(
      (p) =>
        p.id !== searchedProduct.id &&
        (normalize(p.categories) === normalize(searchedProduct.categories) ||
          normalize(p.brands) === normalize(searchedProduct.brands))
    );
  }, [searchedProduct, allProducts]);

  // 🔵 Related → Linked (same type, different category)
  const linkedProducts = useMemo(() => {
    if (!searchedProduct) return [];

    return allProducts.filter(
      (p) =>
        p.id !== searchedProduct.id &&
        normalize(p.type) === normalize(searchedProduct.type) &&
        normalize(p.categories) !== normalize(searchedProduct.categories)
    );
  }, [searchedProduct, allProducts]);

  // ➕ Add Upsell
  const addUpsell = (id) => {
    const list = formValues.upsells || [];
    if (!list.includes(id)) {
      setFormValues({ ...formValues, upsells: [...list, id] });
    }
  };

  // ➕ Add Linked
  const addLinked = (id) => {
    const list = formValues.linked_products || [];
    if (!list.includes(id)) {
      setFormValues({ ...formValues, linked_products: [...list, id] });
    }
  };

  // ❌ Remove
  const removeItem = (key, id) => {
    setFormValues({
      ...formValues,
      [key]: (formValues[key] || []).filter((x) => x !== id),
    });
  };

  return (
    <div className="border rounded p-3 bg-white">

      {/* 🔍 Search */}
      <input
        className="form-control mb-3"
        placeholder="Search base product..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {!searchedProduct && term && (
        <p className="text-muted">No product found</p>
      )}

      {searchedProduct && (
        <div className="row g-3">

         {/* 🟢 UPSSELLS */}
<div className="col-md-6">
  <h6 className="fw-bold">Upsells (Similar)</h6>

  {allProducts.length === 0 && <p className="text-muted">No products</p>}

  {(searchedProduct ? upsellProducts : allProducts).map((p) => {
    if (p.id === (searchedProduct?.id || -1)) return null; // skip base product
    return (
      <div
        key={p.id}
        className="border p-2 mb-2 d-flex justify-content-between align-items-center"
      >
        <span>{p.product_name}</span>
        {formValues.upsells?.includes(p.id) ? (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeItem("upsells", p.id)}
          >
            Remove
          </button>
        ) : (
          <button
            className="btn btn-sm btn-success"
            onClick={() => addUpsell(p.id)}
          >
            Add
          </button>
        )}
      </div>
    );
  })}
</div>

          {/* 🔵 LINKED PRODUCTS */}
          {/* 🔵 LINKED PRODUCTS */}
<div className="col-md-6">
  <h6 className="fw-bold">Linked Products (Related)</h6>

  {(searchedProduct ? linkedProducts : allProducts).map((p) => {
    if (p.id === (searchedProduct?.id || -1)) return null; // skip base product
    return (
      <div
        key={p.id}
        className="border p-2 mb-2 d-flex justify-content-between align-items-center"
      >
        <span>{p.product_name}</span>
        {formValues.linked_products?.includes(p.id) ? (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeItem("linked_products", p.id)}
          >
            Remove
          </button>
        ) : (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => addLinked(p.id)}
          >
            Add
          </button>
        )}
      </div>
    );
  })}
</div>

        </div>
      )}

      {/* ✅ SELECTED SUMMARY */}
      <hr />

      <h6>Selected Upsells</h6>
      {(formValues.upsells || []).map((id) => {
        const p = allProducts.find((x) => x.id === id);
        return (
          <span
            key={id}
            className="badge bg-success me-2 mb-2"
            onClick={() => removeItem("upsells", id)}
            style={{ cursor: "pointer" }}
          >
            {p?.product_name} ×
          </span>
        );
      })}

      <h6 className="mt-3">Selected Linked Products</h6>
      {(formValues.linked_products || []).map((id) => {
        const p = allProducts.find((x) => x.id === id);
        return (
          <span
            key={id}
            className="badge bg-primary me-2 mb-2"
            onClick={() => removeItem("linked_products", id)}
            style={{ cursor: "pointer" }}
          >
            {p?.product_name} ×
          </span>
        );
      })}
    </div>
  );
}
