import { useState } from "react";

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    score: "",
  });
  const { name, img_url, score } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <div className="edit-fields">
        <p>Add a food item!</p>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Photo:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Score:
          <input
            type="number"
            name="score"
            max='5'
            value={score}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </div>
    </form>
  );
}
