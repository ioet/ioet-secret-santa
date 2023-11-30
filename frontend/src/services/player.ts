import axios from 'axios';
import envManager from '../config/envManager';

const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

export const getRegistrationStatus = async (id: string) => {
  const response = await backend.get(`/player/get/${id}`);
  return response?.data.error_message ? null : response.data;
}

export const getSecretSanta = async (id: string) => {
  const response = await backend.get(`/results/id/${id}`)
  return response.status === 200 ? response.data : null;
}
