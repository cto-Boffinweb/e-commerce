import React from "react";
import { CiFileOn } from "react-icons/ci";
import Table from "../components/Table";

export default function Category() {
  return (
    <div>
      <h5>Manage Categories List</h5>

      {/* Add New Button */}
      <button
        className="btn btn-sm btn-dark"
        style={{ fontSize: "14px" }}
        data-bs-toggle="modal"
        data-bs-target="#addNewModal"
      >
        Add New
      </button>

      {/* Add New Modal */}
      <div className="modal fade" id="addNewModal" tabIndex="-1" style={{fontSize:'14px',width:'330px',left:'600px'}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add New Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <form id="addNewForm">
                <div className="mb-3">
                  <label className="form-label">Category Name</label>
                  <input type="text" className="form-control" id="title" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
<input type="file" className="form-control" />                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select id="status" className="form-select">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Parent Category</label>
                  <select id="parent" className="form-select">
                    <option value="">#</option>
                    <option value="">#</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
                              <button className="btn btn-success" id="saveBtn">Save</button>

              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>

          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}
