import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import "./FoodItems.css";
import Search from "../components/Search";
import { getAllFoods } from "../services/fooditems";

export default function FoodItems(props) {
  const { handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false);
  const [allFoods, setAllFoods] = useState([]);
  const [queriedFoods, setQueriedFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foods = await getAllFoods();
      setAllFoods(foods);
      setQueriedFoods(foods);
    };
    fetchFoods();
  }, []);

  const handleSearch = (event) => {
    const newQueriedFoods = allFoods.filter((food) =>
      food.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedFoods(newQueriedFoods);
  };

  const handleSubmit = (event) => event.preventDefault();

  const searchJSX = queriedFoods.map((food) => (
    <div className="food-item" key={food.id}>
      <Link to={`/food_items/${food.id}`}>
        <p>{food.name}</p>
        <img src={food.img_url} />
      </Link><br/>
      {currentUser?.id === food.user_id && (
        <>
          <Link to={`/food_items/${food.id}/edit`}>
            <button>Edit</button>
          </Link><button onClick={()=> handleOpen(food.id)}>
            Delete
          </button>
        </>
      )}
      
    </div>
  ));

  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="all-foods">{searchJSX}</div>
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
