import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FoodEdit.css';

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    score: '',
  })
  const { name, img_url, score } = formData;
  const { id } = useParams();
  const { foods, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const foodItem = foods.find(food => food.id === Number(id))
      setFormData({
        name: foodItem.name,
        img_url: foodItem.img_url,
        score: foodItem.score,
      })
    }
    if (foods.length) {
      prefillFormData();
    }
  }, [foods, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <img src={img_url}/>
      <div className='edit-fields'><p>Edit Food</p>
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
        </div>
    </form>
  )
}