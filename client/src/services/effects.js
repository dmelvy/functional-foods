import api from './api-config';

export const getAllEffects = async () => {
  const resp = await api.get('/effects');
  return resp.data;
}

export const addEffect = async (foodId, effectId) => {
  const resp = await api.post(`/food_items/${foodId}/effects/${effectId}`);
  return resp.data;
}