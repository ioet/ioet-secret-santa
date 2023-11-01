import axios from 'axios';
import envManager from '../config/envManager';

const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

export const getResultsByOffice = async (currentOffice: string) => {
  const response = await backend.get(`/results/region/${currentOffice.toLowerCase()}`);
  return response?.data.error_message ? null : response.data;
}

export const startGameByOffice = async (office: string) => {
  const response = await backend.post(`/secret-santa/${office}`);
  return !response?.data.error_message;
}
