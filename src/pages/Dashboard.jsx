import React from "react";
import { FaUsers, FaBox, FaLayerGroup, FaChartBar } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-secondary fw-bold">Dashboard Overview</h4>

      {/* Row 1 - Stats */}
      <div className="row g-3">

        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <FaUsers size={30} className="text-primary mb-2" />
            <h6 className="text-secondary">Total Users</h6>
            <h4 className="fw-bold">128</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <FaLayerGroup size={30} className="text-success mb-2" />
            <h6 className="text-secondary">Categories</h6>
            <h4 className="fw-bold">12</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <FaBox size={30} className="text-warning mb-2" />
            <h6 className="text-secondary">Products</h6>
            <h4 className="fw-bold">348</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <FaChartBar size={30} className="text-danger mb-2" />
            <h6 className="text-secondary">Monthly Sales</h6>
            <h4 className="fw-bold">₹78,200</h4>
          </div>
        </div>
      </div>

      {/* Row 2 - Latest Section */}
      <div className="row mt-4 g-3">

        {/* Recent Orders */}
        <div className="col-md-8" style={{fontSize:'14px'}}>
          <div className="card shadow-sm p-3">
            <h6 className="fw-bold text-secondary mb-3">Recent Activity</h6>

            <table className="table table-striped table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Activity</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Amit</td>
                  <td>Added New Product</td>
                  <td>10 min ago</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sneha</td>
                  <td>Updated Category</td>
                  <td>25 min ago</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ravi</td>
                  <td>Login</td>
                  <td>1 hour ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Box */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h6 className="fw-bold text-secondary my-3">Notifications</h6>
            <ul className="list-group small">
              <li className="list-group-item">New user registered</li>
              <li className="list-group-item">2 new orders received</li>
              <li className="list-group-item">Stock low alert (2 items)</li>
              <li className="list-group-item">Backup completed</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
