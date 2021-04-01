import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import './FoodItems.css';

export default function FoodItems(props) {
  const { foods, handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false);

  return (
    <>
      <div className="chef"></div>
    <div className="all-foods">
      {foods.map((food) => (
        <div className="food-item" key={food.id}>
          <Link to={`/food_items/${food.id}`}><img src={food.img_url} /><p>{food.name}</p></Link>
          {currentUser?.id === food.user_id && (
            <>
              <Link to={`/food_items/${food.id}/edit`}>
                <button className='authchange'>Edit</button>
              </Link>
              <button className='authchange' onClick={() => handleOpen(food.id)}>delete</button>
              <br />
            </>
          )}
        </div>
      ))}
      <br />
      <Link to="/food_items/new">
        <button>Create</button>
      </Link>
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
      </div>
      </>
  );
}
