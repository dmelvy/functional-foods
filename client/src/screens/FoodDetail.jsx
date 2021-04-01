import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addEffect } from "../services/effects";
import { getOneFood } from "../services/fooditems";

export default function FoodDetail(props) {
  const [foodItem, setFoodItem] = useState(null);
  const [selectedEffect, setSelectedEffect] = useState('');
  const { id } = useParams();
  const { effects } = props;

  useEffect(() => {
    const fetchFoodItem = async () => {
      const foodData = await getOneFood(id);
      setFoodItem(foodData);
    };
    fetchFoodItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedEffect(value)
  }

  const handleSubmit = async () => {
    const foodData = await addEffect(id, selectedEffect)
    setFoodItem(foodData);
  }

  return (
    <div>
      <h3>{foodItem?.name}</h3>
      {foodItem?.effects.map((effect) => (
        <p key={effect.id}>{effect.content}</p>
      ))}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <select onChange={handleChange} defaultValue='default'>
        <option value='default' disabled>---Select an effect---</option>
          {effects.map((effect) => (
            <option value={effect.id}>{effect.content}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  );
}