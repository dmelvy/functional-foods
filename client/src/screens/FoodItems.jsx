import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function Foods(props) {
  const { foods, handleDelete, currentUser } = props;
  const [open, handleOpen] = useState(false);

  return (
    <div>
      <h3>Foods</h3>
      {foods.map((food) => (
        <React.Fragment key={food.id}>
          <Link to={`/foods/${food.id}`}><p>{food.name}</p></Link>
          {currentUser?.id === food.user_id && (
            <>
              <Link to={`/foods/${food.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleOpen(food.id)}>delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to="/foods/new">
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
