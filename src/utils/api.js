import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://192.168.28.163:5000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔄 Add a request interceptor to attach the token
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `jwt ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🌐 GET request
export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error.response?.data || error.message);
    throw error;
  }
};

// 📡 POST request
export const postRequest = async (endpoint, body = {}) => {
  try {
    const response = await apiClient.post(endpoint, body);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error.response?.data || error.message);
    throw error;
  }
};

export default apiClient;
