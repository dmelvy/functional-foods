import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllEffects } from '../services/effects';
import { destroyFood, getAllFoods, postFood, putFood } from '../services/fooditems'

import Effects from '../screens/Effects'
import FoodItems from '../screens/FoodItems'
import FoodCreate from '../screens/FoodCreate'
import FoodEdit from '../screens/FoodEdit'
import FoodDetail from '../screens/FoodDetail'

export default function FoodContainer(props) {
  const [effects, setEffects] = useState([]);
  const [foods, setFoods] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchEffects = async () => {
      const effectData = await getAllEffects()
      setEffects(effectData);
    }
    fetchEffects();
  }, [])

  const handleCreate = async (foodData) => {
    const newFood = await postFood(foodData);
    setFoods(prevState => [...prevState, newFood]);
    history.push('/foods');
  } 

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getAllFoods()
      setFoods(foodData);
    }
    fetchFoods();
  }, [])

  const handleUpdate = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData);
    setFoods(prevState => prevState.map(food => {
      return food.id === Number(id) ? updatedFood : food
    }))
    history.push('/foods');
  }

  const handleDelete = async (id) => {
    await destroyFood(id);
    setFoods(prevState => prevState.filter(food => food.id != id))
  }

  return (
    <Switch>
      <Route path='/effects'>
        <Effects
          effects={effects}
        />
      </Route>
      <Route path='/foods/new'>
        <FoodCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/foods/:id/edit'>
        <FoodEdit
          foods={foods}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/foods/:id'>
        <FoodDetail
          effects={effects}
        />
      </Route>
      <Route path='/foods'>
        <FoodItems
          foods={foods}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}