import axios from 'axios';
import { getCookie } from 'cookies-next';

const GLOBAL_Key = process.env.NEXT_PUBLIC_COOKIES_KEY;

const getToken = () => {
  const value = getCookie(GLOBAL_Key + 'auth');
  if (value) {
    const data = JSON.parse(value);
    return data.token;
  }
  return null;
};

const configApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
	headers: {
		"My-Operational-System": "WEB",
	},
});

const authToken = getToken();

if (authToken) {
  configApi.defaults.headers.common.Authorization = 'Bearer ' + authToken;
}

const api = {
  setToken: (token) => {
    if (token) {
      configApi.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
  },

  post: async (url, params) => {
    try {
      const response = await configApi.post(url, params);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  get: async (url, params = {}) => {
    try {
      const response = await configApi.get(url, { params });
      return response.data;
    } catch (error) {
      return error;
    }
  },

  put: async (url, params) => {
    try {
      const response = await configApi.put(url, params);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  delete: async (url, params = {}) => {
    try {
      const response = await configApi.delete(url, { params });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default api;
