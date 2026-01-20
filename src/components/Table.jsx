import { useEffect, useState } from "react";

const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("uploads/")) {
    return `http://localhost:5000/${image}`;
  }

  return `http://localhost:5000/uploads/products/${image}`;
};

export default function Table({ apiUrl, columns, onEdit, onDelete, refreshKey, pageSize = 10 }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Data
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(result => {
        if (Array.isArray(result)) {
          setData(result);
        } else {
          setData([]);
          console.error("API did not return array", result);
        }
        setCurrentPage(1); // Reset to first page on refresh
      })
      .catch(err => {
        console.error(err);
        setData([]);
      });
  }, [apiUrl, refreshKey]);

  // Pagination Logic
  const totalPages = Math.ceil(data.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIdx, startIdx + pageSize);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
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
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 2}>No Data Found</td>
            </tr>
          ) : (
            currentData.map((item, index) => (
              <tr key={item.id}>
                <td>{startIdx + index + 1}</td>

                {columns.map(col => (
                  <td key={col.key}>
                    {col.type === "image" ? (
                      <img
                        src={getImageUrl(item[col.key])}
                        className="img-thumbnail"
                        style={{ width: "60px", height: "60px", objectFit: "contain" }}
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
                  <button className="btn btn-warning btn-sm me-1" onClick={() => onEdit && onEdit(item)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm me-1" onClick={() => onDelete && onDelete(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Bootstrap Pagination */}
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
