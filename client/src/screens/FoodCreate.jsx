import { useState } from 'react';

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    score: '',
  })
  const { name, img_url, score } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Food</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          />
      </label>
      <label>
        Photo:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Score:
        <input
          type='number'
          name='score'
          value={score}
          onChange={handleChange}
          />
      </label>
      <button>Submit</button>
      </form>
  )
}