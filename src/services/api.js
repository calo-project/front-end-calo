import axios from 'axios';

const API_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getData = async () => {
  const response = await api.get('/data');
  return response.data;
};

export const postData = async (data) => {
  const response = await api.post('/data', data);
  return response.data;
};