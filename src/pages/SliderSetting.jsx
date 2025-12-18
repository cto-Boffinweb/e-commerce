import { useEffect, useState } from "react";

export default function SliderSetting() {
  const [banners, setBanners] = useState([
    {
      id: 1,
      image: "",
      subtitle: "",
      title: "",
      description: "",
      buttons: []
    }
  ]);

  useEffect(() => {
    localStorage.setItem("banners", JSON.stringify(banners));
  }, [banners]);

  const saveBanners = () => {
    alert("Slider data saved successfully");
    window.dispatchEvent(new Event("bannersUpdated"));
  };

  const handleChange = (index, field, value) => {
    const updated = [...banners];
    updated[index][field] = value;
    setBanners(updated);
  };

  const handleButtonChange = (bIndex, btnIndex, field, value) => {
    const updated = [...banners];
    updated[bIndex].buttons[btnIndex][field] = value;
    setBanners(updated);
  };

  const addButton = (index) => {
    const updated = [...banners];
    updated[index].buttons.push({ text: "New Button", link: "/" });
    setBanners(updated);
  };

  const removeButton = (bIndex, btnIndex) => {
    const updated = [...banners];
    updated[bIndex].buttons.splice(btnIndex, 1);
    setBanners(updated);
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4 text-center">Slider Settings (Admin)</h3>

      {banners.map((banner, index) => (
        <div key={banner.id} className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Banner {index + 1}</h5>

            <div className="mb-3">
              <label className="form-label">Image Path</label>
              <input
                className="form-control"
                placeholder="/banner1.jpg"
                value={banner.image}
                onChange={(e) => handleChange(index, "image", e.target.value)}
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Subtitle</label>
                <input
                  className="form-control"
                  value={banner.subtitle}
                  onChange={(e) => handleChange(index, "subtitle", e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  value={banner.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={banner.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
              />
            </div>

            <h6 className="mt-3">Buttons</h6>
            {banner.buttons?.map((btn, btnIndex) => (
              <div key={btnIndex} className="d-flex gap-2 mb-2 align-items-center">
                <input
                  className="form-control"
                  placeholder="Button Text"
                  value={btn.text}
                  onChange={(e) => handleButtonChange(index, btnIndex, "text", e.target.value)}
                />
                <input
                  className="form-control"
                  placeholder="Button Link"
                  value={btn.link}
                  onChange={(e) => handleButtonChange(index, btnIndex, "link", e.target.value)}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeButton(index, btnIndex)}
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              className="btn btn-outline-secondary mt-2"
              onClick={() => addButton(index)}
            >
              + Add Button
            </button>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={saveBanners}>
          Save Slider
        </button>
      </div>
    </div>
  );
}
