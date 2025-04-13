import axios from 'axios';

const BASE_URL = 'http://192.168.28.163:5000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `jwt ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error.response?.data || error.message);
    throw error;
  }
};


export const postRequest = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error.response?.data || error.message);
    throw error;
  }
};

export default apiClient;
