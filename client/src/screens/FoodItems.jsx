import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function FoodItems(props) {
  const { foods, handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false);

  return (
    <div>
      <h3>Food Items</h3>
      {foods.map((food) => (
        <React.Fragment key={food.id}>
          <Link to={`/food_items/${food.id}`}><p>{food.name}</p></Link>
          {currentUser?.id === food.user_id && (
            <>
              <Link to={`/food_items/${food.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleOpen(food.id)}>delete</button>
            </>
          )}
        </React.Fragment>
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
  );
}
