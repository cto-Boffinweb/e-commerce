import  { useRef, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ProductData from "./ProductData";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import {validate}  from "../components/Validation";


export default function Product() {
  
const [loading, setLoading] = useState(false);

const [errors, setErrors] = useState({});

const fileRef = useRef();
const [imagePreview, setImagePreview] = useState(null);

const [formValues, setFormValues] = useState({

  productName: "",
  tags: "",
  category: "",
  brand: "",
  shortDesc: "",
  fullDesc: "",
  image: null,
  weight: "",
  length: "",
  width: "",
  height: "",
  upsell: [],
  attrName: "",
  attrValues: "",
    attributes: [], 
variations:[],
  productCode: "",
  sku: "",
  manageStock: "",
  stockQty: "",
  isDeliveryCharge: "",
  deliveryCharge: ""
});

  const handleAddAttribute = () => {
    const name = formValues.attrName.trim();
    const rawValues = formValues.attrValues.trim();

    if (!name || !rawValues) {
      alert("Provide attribute name and values");
      return;
    }

    const values = rawValues
      .split(",")
      .map(v => v.trim())
      .filter(v => v);

    if (values.length === 0) {
      alert("Enter valid attribute values");
      return;
    }

    const alreadyExists = formValues.attributes.some(
      (a) => a.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      alert("This attribute name already exists");
      return;
    }

    const newAttr = {
      id: Date.now(),
      name,
      values,
    };

    setFormValues({
      ...formValues,
      attributes: [...formValues.attributes, newAttr],
      attrName: "",
      attrValues: "",
    });
  };
const handleRemoveAttribute = (id) => {
  setFormValues({
    ...formValues,
    attributes: formValues.attributes.filter(attr => attr.id !== id)
  });
};


  const rules = {
  productName: { required: true, min: 3 },
  tags: { required: true },
  category: { required: true },
  brand: { required: true },
  shortDesc: { required: true, min: 10 },
  fullDesc: { required: true, min: 20 },
  image: { required: true, type: "image" },
  weight: { required: true },
  length: { required: true },
  width: { required: true },
  height: { required: true },
  productCode: { required: true },
  sku: { required: true },
  manageStock: { required: true },
  stockQty: { required: true },
  isDeliveryCharge: { required: true },
  deliveryCharge: {
    required: (values) => values.isDeliveryCharge === "yes"
  },

attrName: { required: true },
attrValues: { required: true },


};



 const handlePublish = () => {
  setLoading(true); // 🔥 Spinner ON

  const newErrors = validate(formValues, rules);
  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    setLoading(false);
    return;
  }

  setTimeout(() => {
    alert("Form submitted successfully!");

    // RESET form
    setFormValues({
      productName: "",
      tags: "",
      category: "",
      brand: "",
      shortDesc: "",
      fullDesc: "",
      image: null,
      weight: "",
      length: "",
      width: "",
      height: "",
      upsell: [],
      attrName: "",
      attrValues: "",
        attributes: [],   

      productCode: "",
      sku: "",
      manageStock: "",
      stockQty: "",
      isDeliveryCharge: "",
      deliveryCharge: ""
    });

    setImagePreview(null);
    if (fileRef.current) fileRef.current.value = "";

    setLoading(false); // 🔥 Spinner OFF
  }, 1500); // 1.5s spinner (optional)
};

const [variations, setVariations] = useState([]);
const [variationPrices, setVariationPrices] = useState({
  mrp: [],
  sell: []
});
const [variationStocks, setVariationStocks] = useState([]);

// Generate Variations (Cartesian Product)
const generateVariations = () => {
  const attrs = formValues.attributes.map(attr => attr.values);
  if (attrs.length === 0) return alert("Add attributes first");

  const combos = attrs.reduce((a, b) => {
    const res = [];
    a.forEach(x => b.forEach(y => res.push([...x, y])));
    return res;
  }, [[]]);

  setVariations(combos);

  setVariationPrices({
    mrp: Array(combos.length).fill(""),
    sell: Array(combos.length).fill("")
  });

  setVariationStocks(Array(combos.length).fill(""));
};


// Handle price change
const handleVariationPriceChange = (type, index, value) => {
  setVariationPrices((prev) => {
    const updated = { ...prev };
    updated[type][index] = value;
    return updated;
  });
};


// Handle stock change
const handleVariationStockChange = (index, value) => {
  const temp = [...variationStocks];
  temp[index] = value;
  setVariationStocks(temp);
};



  return (
    <div className="container-fluid mt-4 p-3" style={{ backgroundColor: '#f0e9e97c', fontSize: '14px' }}>
      <div className="row">
        {/* LEFT SIDE */}
<div className="col-lg-8 col-md-12">
          {/* Product Name */}
          <div className="panel-box mb-2 shadow p-2">
            <label className="form-label"><h6>Product name</h6></label>
<input
  type="text"
  className="form-control rounded-3"
  placeholder="Enter product name"
  value={formValues.productName}
  onChange={(e) => setFormValues({...formValues, productName: e.target.value})}
/>
{errors.productName && <p style={{color:'red'}}>{errors.productName}</p>}
          </div>

          {/* Short Description */}
          <div className="editor-wrapper mb-2 shadow p-2">
  <label className="form-label"><h6>Short description</h6></label>

  <div className="editor-box  ">
    <CKEditor
  editor={ClassicEditor}
  data={formValues.shortDesc}
  onChange={(event, editor) => {
    setFormValues({ ...formValues, shortDesc: editor.getData() });
  }}
/>
{errors.shortDesc && <p style={{ color: "red" }}>{errors.shortDesc}</p>}

</div>
</div>


          {/* Description */}
        <div className="editor-wrapper mb-2 p-2 shadow">
            <label className="form-label"><h6>Description</h6></label>

            <div className="editor-box">
              <CKEditor
  editor={ClassicEditor}
  data={formValues.fullDesc}
  onChange={(event, editor) => {
    setFormValues({ ...formValues, fullDesc: editor.getData() });
  }}
/>
{errors.fullDesc && <p style={{ color: "red" }}>{errors.fullDesc}</p>}

            </div>
          </div>
<ProductData
  formValues={formValues}
  setFormValues={setFormValues}
  errors={errors}
  setErrors={setErrors}   
  validate={validate}   
    handleRemoveAttribute={handleRemoveAttribute}
   handleAddAttribute={handleAddAttribute} 
   generateVariations={generateVariations}
  variations={variations}
  variationPrices={variationPrices}
  variationStocks={variationStocks}
  handleVariationPriceChange={handleVariationPriceChange}
  handleVariationStockChange={handleVariationStockChange}

/>
</div>

        {/* RIGHT SIDE */}
<div className="col-lg-4 col-md-12 ">
          

          {/* Categories */}
          <div className="panel-box border p-3 mb-2 shadow">
            <label className="form-label">Categories</label>
            <select
  className="form-select"
  id="categorySelect"
  value={formValues.category}
  onChange={(e) =>
    setFormValues({ ...formValues, category: e.target.value })
  }
>
  <option value="">Select Category</option>
  <option value="Men">Men</option>
  <option value="Women">Women</option>
  <option value="Furniture">Furniture</option>
</select>
{errors.category && <p style={{ color: "red" }}>{errors.category}</p>}

          </div>

          {/* Brands */}
          <div className="panel-box border p-3 mb-2 shadow">
            <label className="form-label">Brands</label>
           
           <select
  className="form-select"
  id="brandSelect"
  value={formValues.brand}
  onChange={(e) =>
    setFormValues({ ...formValues, brand: e.target.value })
  }
>
  <option value="">Select Brand</option>
  <option value="Nike">Nike</option>
  <option value="Puma">Puma</option>
  <option value="Adidas">Adidas</option>
</select>

{errors.brand && <p style={{ color: "red" }}>{errors.brand}</p>}

          </div>

          {/* Tags */}
          <div className="panel-box p-3 border shadow">
            <label className="form-label">Tags</label>
<input
  type="text"
  className="form-control"
  placeholder="Comma separated tags"
  value={formValues.tags}
  onChange={(e) => setFormValues({...formValues, tags: e.target.value})}
/>
{errors.tags && <p style={{color:'red'}}>{errors.tags}</p>}
            <small className="text-muted">Separate tags with commas.</small>
          </div>

                  <div className="card mt-2">
                    <div className="card-header">Product Image</div>
                    <div className="card-body text-center">
                    <div className="img-box">
  {imagePreview ? (
    <img src={imagePreview} alt="preview" />
  ) : (
    <>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </>
  )}
</div>


<input
  type="file"
  className="my-2"
  ref={fileRef}
  onChange={(e) => {
    const file = e.target.files[0];
    setFormValues({ ...formValues, image: file });
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }}
/>


{errors.image && <p style={{color:'red'}}>{errors.image}</p>}

<button
  className="btn btn-link text-danger p-0"
  onClick={() => {
    setImagePreview(null);
    setFormValues({ ...formValues, image: null });
    if (fileRef.current) fileRef.current.value = "";
  }}
>
  Remove
</button>


                    </div>
                  </div>


                  <div className="card my-2 ">
                    <div className="card-header">Gallery Images</div>
                    <div className="card-body">
                      <button className="btn btn-outline-primary btn-sm">Add images</button>
                    </div>
                  </div>

                  <div className="text-end"> 
<button className="btn btn-primary" onClick={handlePublish} disabled={loading}>
  {loading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2"></span>
      Publishing...
    </>
  ) : (
    "Publish"
  )}
</button>

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
.img-box {
  display: flex;
  gap: 8px;
}

.img-box img {
  flex: 1;
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}

        `}
      </style>
    </div>
  );
}
