import { jwtDecode } from 'jwt-decode';
import generalStore from 'redux/store';
import axios from 'axios';

import { checkIsTokenExpired, updateTokens } from './helpers';

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://backend-taskspro-public.onrender.com',
  });

  axiosInstance.interceptors.request.use(
    async config => {
      const state = generalStore.store.getState();
      const accessToken = state.auth.token;
      const isLoggedIn = state.auth.isLoggedIn;

      if (!isLoggedIn) {
        if (!accessToken && config.url?.endsWith('/api/users/current')) {
          const abortController = new AbortController();
          config.signal = abortController.signal;

          abortController.abort();
          throw new Error('User is not authenticated');
        }
        if (accessToken && config.url?.endsWith('/api/auth/google')) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
      }

      const tokenStatus = jwtDecode(accessToken);

      if (tokenStatus && tokenStatus.exp) {
        const isTokenExpired = checkIsTokenExpired(tokenStatus.exp);
        isTokenExpired
          ? await updateTokens()
          : (config.headers['Authorization'] = `Bearer ${accessToken}`);
      }

      return config;
    },
    error => {
      throw error;
    }
  );

  axiosInstance.interceptors.response.use(
    async response => {
      if (response.config.url?.endsWith('/api/auth/logout')) {
        response.config.headers['Authorization'] = '';
      }

      return response;
    },
    error => {
      throw error;
    }
  );

  return axiosInstance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
