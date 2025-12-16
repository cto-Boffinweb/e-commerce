import { useEffect } from "react";
import { useState } from "react";


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
  // TEXT CHANGE
  const handleChange = (index, field, value) => {
    const updated = [...banners];
    updated[index][field] = value;
    setBanners(updated);
  };

  // BUTTON TEXT CHANGE
  const handleButtonChange = (bIndex, btnIndex, field, value) => {
    const updated = [...banners];
    updated[bIndex].buttons[btnIndex][field] = value;
    setBanners(updated);
  };

  // ADD BUTTON
  const addButton = (index) => {
    const updated = [...banners];
    updated[index].buttons.push({ text: "New Button", link: "/" });
    setBanners(updated);
  };

  // REMOVE BUTTON
  const removeButton = (bIndex, btnIndex) => {
    const updated = [...banners];
    updated[bIndex].buttons.splice(btnIndex, 1);
    setBanners(updated);
  };

  return (
    <div className="container">
      <h3 className="mb-3">Slider Settings (Admin)</h3>
      {banners.map((banner, index) => (
        <div key={banner.id} className="card p-3 mb-4">

          <label>Image Path</label>
          <input
            className="form-control mb-2"
            placeholder="/banner1.jpg"
            value={banner.image}
            onChange={(e) =>
              handleChange(index, "image", e.target.value)
            }
          />

          <label>Subtitle</label>
          <input
            className="form-control mb-2"
            value={banner.subtitle}
            onChange={(e) =>
              handleChange(index, "subtitle", e.target.value)
            }
          />

          <label>Title</label>
          <input
            className="form-control mb-2"
            value={banner.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <label>Description</label>
          <textarea
            className="form-control mb-3"
            value={banner.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          />

          <h6>Buttons</h6>
          {banner.buttons?.map((btn, btnIndex) => (
            <div key={btnIndex} className="d-flex gap-2 mb-2">
              <input
                className="form-control"
                value={btn.text}
                onChange={(e) =>
                  handleButtonChange(index, btnIndex, "text", e.target.value)
                }
              />
              <input
                className="form-control"
                value={btn.link}
                onChange={(e) =>
                  handleButtonChange(index, btnIndex, "link", e.target.value)
                }
              />
              <button
                className="btn btn-danger"
                onClick={() => removeButton(index, btnIndex)}
              >
                X
              </button>
            </div>
          ))}


          <button
            className="btn btn-sm btn-secondary mt-2"
            onClick={() => addButton(index)}
          >
            + Add Button
          </button>

        </div>
      ))}
      <div className="">
        <button
          className="btn btn-primary"
          onClick={saveBanners}
        >
          Save Slider
        </button>
      </div>
    </div>
  );
}
