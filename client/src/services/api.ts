import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDestinations = async () => {
  const response = await api.get('/destinations');
  return response.data;
};

export const fetchPackages = async () => {
  const response = await api.get('/packages/top-selling');
  return response.data;
};

export default api; 