import React, { useState } from "react";

export default function PopularSetting() {
  const [popularItems, setPopularItems] = useState([
    {
      id: Date.now(),
      image: "",
      title: "",
      price: "",
      oldPrice: "",
      stars: 5,
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...popularItems];
    updated[index][field] = value;
    setPopularItems(updated);
  };

  const savePopularItems = () => {
    localStorage.setItem("popularItems", JSON.stringify(popularItems));
    alert("Popular items saved successfully!");
    window.dispatchEvent(new Event("popularUpdated"));
  };

  const addItem = () => {
    setPopularItems([
      ...popularItems,
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

  const removeItem = (index) => {
    const updated = [...popularItems];
    updated.splice(index, 1);
    setPopularItems(updated);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Manage Popular Items</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image Path</th>
              <th>Title</th>
              <th>Price</th>
              <th>Old Price</th>
              <th>Stars</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {popularItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.image}
                    onChange={(e) =>
                      handleChange(index, "image", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.price}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.oldPrice}
                    onChange={(e) =>
                      handleChange(index, "oldPrice", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="5"
                    value={item.stars}
                    onChange={(e) =>
                      handleChange(index, "stars", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-success" onClick={addItem}>
          + Add Item
        </button>
        <button className="btn btn-primary" onClick={savePopularItems}>
          Save Popular Items
        </button>
      </div>
    </div>
  );
}
