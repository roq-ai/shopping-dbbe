import axios from 'axios';
import queryString from 'query-string';
import { AnimationInterface, AnimationGetQueryInterface } from 'interfaces/animation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnimations = async (
  query?: AnimationGetQueryInterface,
): Promise<PaginatedInterface<AnimationInterface>> => {
  const response = await axios.get('/api/animations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAnimation = async (animation: AnimationInterface) => {
  const response = await axios.post('/api/animations', animation);
  return response.data;
};

export const updateAnimationById = async (id: string, animation: AnimationInterface) => {
  const response = await axios.put(`/api/animations/${id}`, animation);
  return response.data;
};

export const getAnimationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/animations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAnimationById = async (id: string) => {
  const response = await axios.delete(`/api/animations/${id}`);
  return response.data;
};
