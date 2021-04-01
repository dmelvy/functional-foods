import api from './api-config';

export const getAllFoods = async () => {
  const resp = await api.get('/food_items');
  return resp.data;
}

export const getOneFood = async (id) => {
  const resp = await api.get(`/food_items/${id}`);
  return resp.data;
}

export const postFood = async (foodData) => {
  const resp = await api.post(`/food_items`, { food_item: foodData });
  return resp.data;
}

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/food_items/${id}`, { food_item: foodData });
  return resp.data;
}

export const destroyFood = async (id) => {
  const resp = await api.delete(`/food_items/${id}`);
  return resp;
}