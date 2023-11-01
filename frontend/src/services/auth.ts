import axios from 'axios';
import envManager from '../config/envManager';

const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

export const getUserPermissions = async () => {
  const response = await backend.get("/api/authz/user-permissions");
  return response?.data.error_message ? null : response.data;
}
