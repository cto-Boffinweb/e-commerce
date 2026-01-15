import { useEffect, useState } from "react";

const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("uploads/")) {
    return `http://localhost:5000/${image}`;
  }

  return `http://localhost:5000/uploads/products/${image}`;
};



export default function Table({ apiUrl, columns, onEdit, onDelete,refreshKey }) {
  const [data, setData] = useState([]);

 useEffect(() => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(result => {
      if (Array.isArray(result)) {
        setData(result);
      } else {
        setData([]); // safety fallback
        console.error("API did not return array", result);
      }
    })
    .catch(err => {
      console.error(err);
      setData([]);
    });
}, [apiUrl, refreshKey]);


  return (
    <table className="table table-bordered table-striped text-center my-5">
      <thead>
        <tr>
          <th>#</th>
          {columns.map(col => (
            <th key={col.key}>{col.label}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length + 2}>No Data Found</td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>

              {columns.map(col => (
                <td key={col.key}>
                  {col.type === "image" ? (
                    <img
  src={getImageUrl(item[col.key])}
  width="50"
  style={{ objectFit: "cover" }}
/>

                  ) : col.type === "status" ? (
                    <span className={`badge ${item[col.key] === "active" ? "bg-success" : "bg-danger"}`}>
                      {item[col.key]}
                    </span>
                  ) : (
                    item[col.key]
                  )}
                </td>
              ))}

              <td>
                <button
                  className="btn btn-warning btn-sm mx-1"
                  onClick={() => onEdit && onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => onDelete && onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
