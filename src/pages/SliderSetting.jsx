import { useEffect, useState } from "react";
import axios from "axios";

export default function SliderSetting() {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uniqueKeyCounter, setUniqueKeyCounter] = useState(0);


  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sliders");
      setSliders(res.data);
            console.log(res.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (index, field, file) => {
    const updated = [...sliders];
    updated[index][field] = file;
    setSliders(updated);
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...sliders];
    updated[index][field] = value;
    setSliders(updated);
  };

  const handleSave = async (slider, index) => {
    const formData = new FormData();
    formData.append("title", slider.title);
    formData.append("heading", slider.heading);
    formData.append("description", slider.description);
    formData.append("btn_1", slider.btn_1);
    formData.append("url_1", slider.url_1);
    formData.append("status", slider.status);

    if (slider.slide instanceof File) formData.append("slide", slider.slide);
    if (slider.thumbnail instanceof File) formData.append("thumbnail", slider.thumbnail);

    try {
      if (slider.id) {
        // Update existing slider
        await axios.put(`http://localhost:5000/api/sliders/${slider.id}`, formData);
        alert("Slider updated successfully");
      } else {
        // Create new slider
        await axios.post("http://localhost:5000/api/sliders", formData);
        alert("Slider added successfully");
      }
      fetchSliders();
    } catch (err) {
      console.log(err);
      alert("Error saving slider");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this slider?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/sliders/${id}`);
      fetchSliders();
    } catch (err) {
      console.log(err);
      alert("Error deleting slider");
    }
  };

 const addNewSlider = () => {
  const newKey = uniqueKeyCounter + 1;
  setUniqueKeyCounter(newKey);

  setSliders([
    ...sliders,
    {
      tempId: Date.now(),   // ✅ frontend unique key
      title: "",
      heading: "",
      description: "",
      btn_1: "",
      url_1: "",
      status: "active",
    },
  ]);
};


  if (loading) return <p>Loading sliders...</p>;

 return (
  <div className="container py-5">
    {/* Header */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold">Slider Settings</h4>
      <button className="btn btn-primary btn-sm" onClick={addNewSlider}>
        + Add Slider
      </button>
    </div>

    <div className="card shadow-sm border-0">
      <div className="table-responsive">
        <table className="table table-bordered align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Button Text</th>
              <th>Button URL</th>
              <th>Image</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {sliders.map((slider, index) => (
              <tr key={slider.id ?? slider.tempId}>
                <td>
                  <input
                    className="form-control form-control-sm"
                    value={slider.title || ""}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    className="form-control form-control-sm"
                    value={slider.heading || ""}
                    onChange={(e) =>
                      handleInputChange(index, "heading", e.target.value)
                    }
                  />
                </td>

                <td>
                  <textarea
                    rows="2"
                    className="form-control form-control-sm"
                    value={slider.description || ""}
                    onChange={(e) =>
                      handleInputChange(index, "description", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    className="form-control form-control-sm"
                    value={slider.btn_1 || ""}
                    onChange={(e) =>
                      handleInputChange(index, "btn_1", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    className="form-control form-control-sm"
                    value={slider.url_1 || ""}
                    onChange={(e) =>
                      handleInputChange(index, "url_1", e.target.value)
                    }
                  />
                </td>

                <td className="text-center">
                  <input
                    type="file"
                    className="form-control form-control-sm mb-1"
                    onChange={(e) =>
                      handleFileChange(index, "slide", e.target.files[0])
                    }
                  />

                  {slider.slide && (
                    <img
                      src={`http://localhost:5000/uploads/sliders/${slider.slide}`}
                      alt=""
                      style={{
                        width: "70px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                      className="border rounded"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  )}
                </td>

                <td className="text-center">
                  <div className="d-flex flex-column gap-1">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleSave(slider, index)}
                    >
                      Save
                    </button>

                   <button
  className="btn btn-danger btn-sm"
  onClick={() => {
    if (slider.id) {
      handleDelete(slider.id);
    } else {
      // frontend se remove karna for new slider before saving
      const updated = sliders.filter((s) => s.tempId !== slider.tempId);
      setSliders(updated);
    }
  }}
>
  Delete
</button>

                  </div>
                </td>
              </tr>
            ))}

            {sliders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  No sliders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    <style>
      {`
      .table th {
  font-size: 13px;
  white-space: nowrap;
}

.table td {
  vertical-align: middle;
}

.form-control-sm {
  font-size: 12px;
}

      `}
    </style>
  </div>
);


}
