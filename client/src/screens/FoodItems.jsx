import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import "./FoodItems.css";
import Search from "../components/Search";
import { getAllFoods } from "../services/fooditems";

export default function FoodItems(props) {
  const { foods, handleDelete, currentUser } = props;
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
        <p name={food.name} />
        <img src={food.img_url} />
      </Link>
      {currentUser?.id === food.user_id && (
        <>
          <Link to={`/food_items/${food.id}/edit`}>
            <button className="authchange">Edit</button>
          </Link>
          <button className="authchange" onClick={() => handleOpen(food.id)}>
            delete
          </button>
        </>
      )}
    </div>
  ));

  return (
    <>
      {/* <div className="all-foods">
        {foods.map((food) => (
          <div className="food-item" key={food.id}>
            <Link to={`/food_items/${food.id}`}>
              <img src={food.img_url} />
              <p>{food.name}</p>
            </Link>
            {currentUser?.id === food.user_id && (
              <>
                <Link to={`/food_items/${food.id}/edit`}>
                  <button className="authchange">Edit</button>
                </Link>
                <button
                  className="authchange"
                  onClick={() => handleOpen(food.id)}
                >
                  delete
                </button>
                <br />
              </>
            )}
          </div>
        ))}
        <br />
        {open && (
          <Modal
            open={open}
            handleOpen={handleOpen}
            handleDelete={handleDelete}
          />
        )}
      </div> */}
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="all-foods">{searchJSX}</div>
    </>
  );
}
