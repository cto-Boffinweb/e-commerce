import { CiSearch } from 'react-icons/ci'
import  { useEffect, useState } from "react";

export default function Table() {
    const [data, setData] = useState([]);

useEffect(() => {
  fetch("https:")
    .then((res) => res.json())
    .then((result) => setData(result))
    .catch((err) => console.log(err));
}, []);

  return (
    <div>
      <div className="container ">
        <div className="card shadow my-5 p-3">
            <div className="row align-items-center my-3 px-3" style={{ fontSize: "12px" }}>

  {/* Left Side - Show entries */}
  <div className="col-md-6 d-flex align-items-center" >
    <span className="mx-2">Show</span>
    <select
  className="form-select"
  style={{ width: "80px" }}
>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
    <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>

</select>

    <span className="mx-2">entries</span>
  </div>

  {/* Right Side - Search */}
  <div className="col-md-6 d-flex justify-content-end align-items-center">
<span className='me-2'>Search </span>    <input
      type="search"
      className="form-control"
      style={{ width: "150px", height: "30px" }}
    />
  </div>
</div>

        <table className='table table-bordered table-striped shadow mx-auto text-center px-3' style={{fontSize:'14px'}}>
<thead>
    <tr>
        
                <th>#</th>
        <th>image</th>
        <th>Type</th>
        <th>Category</th>
        <th>inserted date</th>
<th>Last Updated Date</th>
<th>Status</th>
<th>Action</th>


    </tr>
</thead>
<tbody>
  {data.length === 0 ? (
    <tr><td colSpan="8">No Data Found</td></tr>
  ) : (
    data.map((item, index) => (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td><img src={item.image} style={{width:"50px"}} /></td>
        <td>{item.type}</td>
        <td>{item.category}</td>
        <td>{item.insertedDate}</td>
        <td>{item.updatedDate}</td>
        <td>
          {item.status === "active" ? (
            <span className="badge bg-success">Active</span>
          ) : (
            <span className="badge bg-danger">Inactive</span>
          )}
        </td>
        <td>
          <button className="btn btn-warning btn-sm mx-1">Edit</button>
          <button className="btn btn-danger btn-sm mx-1">Delete</button>
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
      </div>
    
    </div>
  )
}
