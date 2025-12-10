import  { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Product() {
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");

  return (
    <div className="container-fluid mt-4 p-3" style={{ backgroundColor: '#f0e9e97c', fontSize: '14px' }}>
      <div className="row">
        {/* LEFT SIDE */}
<div className="col-lg-8 col-md-12">
          {/* Product Name */}
          <div className="panel-box mb-2 shadow p-2">
            <label className="form-label"><h6>Product name</h6></label>
            <input type="text" className="form-control rounded-3" placeholder="Enter product name" />
          </div>

          {/* Short Description */}
          <div className="editor-wrapper mb-2 shadow p-2">
  <label className="form-label"><h6>Short description</h6></label>

  <div className="editor-box  ">
    <CKEditor
  editor={ClassicEditor}
  data={shortDesc}
  onChange={(event, editor) => {
    const data = editor.getData();
    setShortDesc(data);
  }}
/>
</div>
</div>


          {/* Description */}
        <div className="editor-wrapper mb-2 p-2 shadow">
            <label className="form-label"><h6>Description</h6></label>

            <div className="editor-box">
              <CKEditor
                editor={ClassicEditor}
                data={fullDesc}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFullDesc(data);
                }}
              />
            </div>
          </div>
</div>

        {/* RIGHT SIDE */}
<div className="col-lg-4 col-md-12 ">
          {/* Type */}
          <div className="panel-box border p-3 mb-2 shadow">
            <label className="form-label">Type</label>
            
            <select className="form-select">
              <option>Please Select ...</option>
              <option>Simple</option>
              <option>Variable</option>
            </select>
          </div>

          {/* Categories */}
          <div className="panel-box border p-3 mb-2 shadow">
            <label className="form-label">Categories</label>
            <select className="form-select" size="6">
              <option>Men</option>
              <option>- King Bed</option>
              <option>- Queen Bed</option>
              <option>- Single Bed</option>
              <option>Women</option>
              <option>Furniture</option>
            </select>
          </div>

          {/* Brands */}
          <div className="panel-box border p-3 mb-2 shadow">
            <label className="form-label">Brands</label>
            <select className="form-select">
              <option>Please Select ...</option>
              <option>Nike</option>
              <option>Puma</option>
              <option>Adidas</option>
            </select>
          </div>

          {/* Tags */}
          <div className="panel-box p-3 border shadow">
            <label className="form-label">Tags</label>
            <input type="text" className="form-control" placeholder="Comma separated tags" />
            <small className="text-muted">Separate tags with commas.</small>
          </div>
        </div>
      </div>
      <style>
        {`
        
        .editor-box {
  background: #f5f5f5; 
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  padding:3px;
}

.ck-editor__editable {
  

  min-height: 150px !important;
  max-height: 150px !important;
  overflow-y: auto !important;
}

        `}
      </style>
    </div>
  );
}
